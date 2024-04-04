import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Polyline } from "react-leaflet";
import transmetroData from "../data/csvjson";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import { globalTransport } from "../store/globalTransport";
import BusIcon from "./BusIcon";

function Map() {
  const { service } = globalTransport();

  const coordenadas = transmetroData
    .filter((parada) => parada["Nombre ruta"] === service)
    .map((bus) => ({
      coordenadaX: bus["Coordenada X"],
      coordenadaY: bus["Coordenada Y"],
      secuencieStop: bus["Secuencia parada"],
      coordenadaName: bus["Nombre parada"],
    }));

  const paradasVector = coordenadas.map((coordenada) => [
    coordenada["coordenadaY"],
    coordenada["coordenadaX"],
  ]);

  const positionLocation = paradasVector[0];

  const limeOptions = { color: "blue" };

  return (
    <MapContainer center={positionLocation} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {coordenadas.map((coordenada, index) => (
        <Marker
          position={[coordenada.coordenadaY, coordenada.coordenadaX]}
          icon={BusIcon}
        >
          <Popup>
            {coordenada.secuencieStop + " - " + coordenada.coordenadaName}
          </Popup>
        </Marker>
      ))}

      <Polyline pathOptions={limeOptions} positions={paradasVector} />
    </MapContainer>
  );
}

export default Map;
