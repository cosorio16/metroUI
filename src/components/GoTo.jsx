import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import BusIcon from "./BusIcon";

function GoTo({ position, paradeNameGo, open }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
      open ? map.openPopup(paradeNameGo, position) : "";
    }
  }, [position, map]);

  return (
    <Marker position={position} icon={BusIcon}>
      <Popup>{paradeNameGo}</Popup>
    </Marker>
  );
}

export default GoTo;
