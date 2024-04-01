import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import transmetroData from "./data/csvjson.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import View from "./components/View.jsx";
import Transport from "./components/Transport.jsx";

const homeSections = ["Troncales", "Expresos", "Alimentadores"];

const buses = [
  ...new Set(transmetroData.map((bus) => bus["Nombre ruta"].replace(/ /g, ""))),
];

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

homeSections.forEach((section) => {
  routes.push({
    path: section,
    element: <View key={section} serviceName={section} />,
  });
});

buses.forEach((bus) => {
  routes.push({
    path: bus,
    element: <Transport />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
