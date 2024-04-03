import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/View.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBus,
  faHouse,
  faMapPin,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { globalTransport } from "../store/globalTransport";
import transmetroData from "../data/csvjson";

function View({ serviceName }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { transport, service } = globalTransport((state) => ({
    transport: state.transport,
    service: state.service,
  }));

  useEffect(() => {
    setIsVisible(true);
  }, [location]);

  const setBus = (bus) => {
    globalTransport.setState({
      service: bus,
    });
  };

  // page-transition ${
  //   isVisible ? "" : "page-transition-exit"
  // }

  return (
    <>
      {isVisible ? <></> : <div className="loader"></div>}
      <div className={`view_container_pag `}>
        <div className="nav_view_pag">
          <button className="home_button_back">
            <Link to={"/"}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </button>
          <h1>
            <FontAwesomeIcon icon={faBus} />
            {serviceName}
          </h1>
        </div>
        <div className="services">
          {transport.map((t, index) => (
            <div key={index} className="service_card">
              <h3 key={t}>{t}</h3>
              <div className="container_service_info">
                <div className="service_first_stop">
                  <FontAwesomeIcon icon={faHouse} />
                  <p>
                    {
                      transmetroData.filter(
                        (bus) => bus["Nombre ruta"] === t
                      )[0]["Nombre parada"]
                    }
                  </p>
                </div>
                <div className="service_last_stop">
                  <FontAwesomeIcon icon={faMapPin} />
                  <p>
                    {serviceName == "Alimentadores"
                      ? transmetroData
                          .filter((bus, length) => bus["Nombre ruta"] === t)
                          .slice(-2)[0]["Nombre parada"]
                      : transmetroData
                          .filter((bus) => bus["Nombre ruta"] === t)
                          .slice(-1)[0]["Nombre parada"]}
                  </p>
                </div>
                <div className="schedule_service">
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>5:00am - 22:00pm</p>
                </div>
              </div>
              <Link to={`/${t.replace(/ /g, "")}`}>
                <button
                  key={"999" + t}
                  onClick={() => setBus(t || "")}
                  className="view_rutes"
                >
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  Ver Ruta
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default View;
