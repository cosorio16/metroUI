import React from "react";
import {
  MapContainer,
  Polyline,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import transmetroData from "../data/csvjson";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import BusIcon from "./BusIcon";
import GoTo from "./GoTo";

function Map({ service, secuencie, open }) {
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

  const limeOptions = { color: "blue" };

  const positionLocation = paradasVector[0];

  return (
    <MapContainer center={positionLocation} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {coordenadas.map((coordenada, index) => (
        <Marker
          key={index}
          position={[coordenada.coordenadaY, coordenada.coordenadaX]}
          icon={BusIcon}
        >
          <Popup>
            {coordenada.secuencieStop + " - " + coordenada.coordenadaName}
          </Popup>
        </Marker>
      ))}

      <GoTo
        position={{
          lat: coordenadas[secuencie].coordenadaY,
          lng: coordenadas[secuencie].coordenadaX,
        }}
        paradeNameGo={
          coordenadas[secuencie].secuencieStop +
          " - " +
          coordenadas[secuencie].coordenadaName
        }
        open={open}
      />

      <Polyline pathOptions={limeOptions} positions={paradasVector} />
    </MapContainer>
  );
}

export default Map;
