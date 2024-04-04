import React from "react";
import { Icon } from "leaflet";

const BusIcon = new Icon({
  iconUrl: "../../public/busvg.svg",
  iconSize: [70, 80],
  iconAnchor: [30, 40],
  popupAnchor: [-5, -10],
});

export default BusIcon;
