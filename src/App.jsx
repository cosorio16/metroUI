import "./App.css";
import Card from "./components/Card";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={`main_container`}>
        <div className="location_tool_bar">
          <Location></Location>
        </div>
        <div className="services_container_cards">
          <Card transportName={"Troncales"} delay={"0s"}></Card>
          <Card transportName={"Expresos"} delay={".3s"}></Card>
          <Card transportName={"Alimentadores"} delay={".5s"}></Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
