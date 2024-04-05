import { useState, useEffect } from "react";
import "./App.css";
import transmetroData from "./data/csvjson";
import Card from "./components/Card";
import Location from "./components/Location";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [location]);

  // page-transition ${
  //   isVisible ? "" : "page-transition-exit"
  // }

  return (
    <>
      <div className={`main_container `}>
        {/* <button className="bars_nav">
          <FontAwesomeIcon icon={faBars} />
        </button> */}
        <div className="location_tool_bar">
          <Location></Location>
        </div>
        <div className="services_container_cards">
          <Card transportName={"Troncales"}></Card>
          <Card transportName={"Expresos"}></Card>
          <Card transportName={"Alimentadores"}></Card>
        </div>
      </div>
    </>
  );
}

export default App;
