import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import transmetroData from "./data/csvjson.js";
import View from "./components/View.jsx";
import Transport from "./components/Transport.jsx";
import "./index.css";

const routes = [
  {
    path: "",
    element: <App />,
  },
];

const homeSections = ["Troncales", "Expresos", "Alimentadores"];

const transmetroServices = [
  ...new Set(transmetroData.map((ruta) => ruta["Nombre ruta"])),
];

const alimentadores = transmetroServices
  .slice(0, 28)
  .concat(transmetroServices[31])
  .concat(transmetroServices[41]);

const troncales = transmetroServices
  .slice(28)
  .filter((bus) => bus !== "U30 Corredor Universitario");

const expresos = troncales.filter((expreso) => {
  const number = parseInt(expreso.match(/\d+/));
  return number >= 10;
});

const transportMap = {
  Troncales: troncales,
  Expresos: expresos,
  Alimentadores: alimentadores,
};

homeSections.map((section) => {
  const transport = transportMap[section] || [];
  routes.push({
    path: `/${section}`,
    element: <View serviceName={section} transport={transport} />,
  });
});

transmetroServices.map((transmetroService) => {
  routes.push({
    path: `/${transmetroService.replace(/ /g, "")}`,
    element: <Transport service={transmetroService} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
