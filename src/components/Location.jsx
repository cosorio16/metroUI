import React from "react";
import "../styles/Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faHouse } from "@fortawesome/free-solid-svg-icons";

function Location() {
  return (
    <div className="location_container">
      <div className="location_tool">
        <div className="from_location">
          <FontAwesomeIcon icon={faHouse} />
          <input type="text" placeholder="Desde" />
        </div>
        <div className="destination_location">
          <FontAwesomeIcon icon={faLocationArrow} />
          <input type="text" placeholder="Hasta" />
        </div>
      </div>
    </div>
  );
}

export default Location;
