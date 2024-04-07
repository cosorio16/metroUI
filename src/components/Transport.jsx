import React from "react";
import { useState, useEffect } from "react";
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

function Transport({ service }) {
  const [paradasShow, setParadasShow] = useState(false);
  const [secuencie, setSecuencie] = useState(0);
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const paradas = transmetroData
    .filter((parada) => parada["Nombre ruta"] === service)
    .map((bus) => bus["Nombre parada"]);

  const secuencieParade = (index) => {
    setSecuencie(index);
    setActive(index);
    setOpen(true);
  };

  return (
    <>
      <div className="transport_container_view">
        <div className="mapa_paradas">
          <Map service={service} secuencie={secuencie} open={open} />
        </div>
        <div
          className="paradas_container_menu"
          style={{
            height: paradasShow ? "50%" : "70px",
            justifyContent: paradasShow ? "" : "center",
            padding: paradasShow ? "" : "50px 20px 50px 20px",
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
          {paradas.map((parada, index) =>
            paradasShow ? (
              <>
                <p
                  key={index}
                  onClick={() => secuencieParade(index)}
                  style={{
                    color: active === index ? "#152d5c" : "",
                    background: active === index ? " #eef8ff" : "",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    style={{
                      color: active === index ? "#152d5c" : " ",
                      border: active === index ? "1px solid #152d5c" : " ",
                    }}
                  />
                  {parada}
                </p>
              </>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Transport;
