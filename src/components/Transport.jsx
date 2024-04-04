import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { globalTransport } from "../store/globalTransport";
import transmetroData from "../data/csvjson";
import "../styles/Transport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faArrowLeft,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Map from "./Map";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Transport() {
  const { service } = globalTransport();

  const [paradasShow, setParadasShow] = useState(false);

  const paradas = transmetroData
    .filter((parada) => parada["Nombre ruta"] === service)
    .map((bus) => bus["Nombre parada"]);

  return (
    <>
      <div className="transport_container_view">
        <div className="mapa_paradas">
          <Map />
        </div>
        <div
          className="paradas_container_menu"
          style={{
            height: paradasShow ? "50%" : "40px",
         
          }}
        >
          <div className="buttons_nav_paradas">
            <button onClick={() => history.back()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              className="expand_paradas_container"
              onClick={() => setParadasShow(!paradasShow)}
            >
              {paradasShow ? (
                <FontAwesomeIcon icon={faCaretDown} />
              ) : (
                <FontAwesomeIcon icon={faCaretUp} />
              )}
            </button>
          </div>
          {paradas.map((parada, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={faLocationPin} />
              {parada}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Transport;
