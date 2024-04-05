import React from "react";
import "../styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Card({ transportName }) {
  const [numberOfRutes, setNumberOfRutes] = useState();

  useEffect(() => {
    switch (transportName) {
      case "Troncales":
        setNumberOfRutes(13);
        break;
      case "Expresos":
        setNumberOfRutes(6);
        break;
      case "Alimentadores":
        setNumberOfRutes(30);
        break;
    }
  }, []);

  return (
    <Link to={transportName.toLowerCase()}>
      <div className="transport_container">
        <div className="transport_image">
          <FontAwesomeIcon icon={faBus} />
        </div>
        <div className="transport_info">
          <p className="service_name">
            {transportName}
            <FontAwesomeIcon icon={faArrowRight} />
          </p>

          <p className="numero_de_rutas">
            <FontAwesomeIcon icon={faBus} />
            {numberOfRutes}
          </p>
          <p className="status_service">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#ffffff" }}
            />
            Active
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
