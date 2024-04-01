import { useState, useEffect } from "react";
import "./App.css";
import transmetroData from "./data/csvjson";
import Card from "./components/Card";
import Location from "./components/Location";
import { useLocation } from "react-router-dom";
import { globalTransport } from "./store/globalTransport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { transport } = globalTransport((state) => ({
    transport: state.transport,
  }));

  useEffect(() => {
    setIsVisible(true);
  }, [location]);

  const transmetroServices = [
    ...new Set(transmetroData.map((ruta) => ruta["Nombre ruta"])),
  ];

  const alimentadores = transmetroServices
    .slice(0, 28)
    .concat(transmetroServices[31])
    .concat(transmetroServices[41]);

  const transmetroBuses = transmetroServices
    .slice(28)
    .filter((bus) => bus !== "U30 Corredor Universitario");

  const expresos = transmetroBuses.filter((expreso) => {
    const number = parseInt(expreso.match(/\d+/));
    return number >= 10;
  });

  const setTransportService = (service) => {
    globalTransport.setState({
      transport: service,
    });
  };

  // page-transition ${
  //   isVisible ? "" : "page-transition-exit"
  // }

  return (
    <>
      <div
        className={`main_container `}
      >
        <button className="bars_nav">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="location_tool_bar">
          <Location></Location>
        </div>
        <div className="services_container_cards">
          <Card
            onClick={() => setTransportService(transmetroBuses)}
            transportName={"Troncales"}
            numberOfRutes={transmetroBuses.length}
          ></Card>
          <Card
            onClick={() => setTransportService(expresos)}
            transportName={"Expresos"}
            numberOfRutes={expresos.length}
          ></Card>
          <Card
            onClick={() => setTransportService(alimentadores)}
            transportName={"Alimentadores"}
            numberOfRutes={alimentadores.length}
          ></Card>
        </div>
        <div className="shedule_transport_service"></div>
      </div>
    </>
  );
}

export default App;
