import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { globalTransport } from "../store/globalTransport";
import transmetroData from "../data/csvjson";
import "../styles/Transport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import Map from "./Map";

function Transport() {
  const { service } = globalTransport();

  const [paradasLow, paradasHigh] = useState(false);

  const paradas = transmetroData
    .filter((parada) => parada["Nombre ruta"] === service)
    .map((bus) => bus["Nombre parada"]);

  return (
    <>
      <div className="transport_container_view">
        <button onClick={() => history.back()}>Atras</button>
        <div className="mapa_paradas">
          <Map />
        </div>
        <div className="paradas_container_menu">
          <button className="expand_paradas_container">
            Pantalla Completa
          </button>
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
