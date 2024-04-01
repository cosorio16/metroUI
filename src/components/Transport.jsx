import React from "react";
import { globalTransport } from "../store/globalTransport";
import transmetroData from "../data/csvjson";
import { useLocation, Link } from "react-router-dom";

function Transport() {
  const { service } = globalTransport();

  const paradas = transmetroData
    .filter((parada) => parada["Nombre ruta"] === service)
    .map((bus) => bus["Nombre parada"]);

  return (
    <>
      <div className="transport_container_view">
        <button onClick={() => history.back()}>Atras</button>
        <h1>{service}</h1>
        <div className="map">Mapa</div>
        {paradas.map((parada) => (
          <p>{parada}</p>
        ))}
      </div>
    </>
  );
}

export default Transport;
