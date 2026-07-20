import { useState } from "react";

import LocationList from "./components/LocationList";
import RouteControls from "./components/RouteControls";
import MapView from "./components/MapView";

function App() {
  const [route, setRoute] = useState(null);

  return (
    <div>
      <header
        style={{
          background: "#2563eb",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>🚚 Smart Delivery Route Optimizer</h1>
        <p>DSA + AI Based Delivery Planning System</p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "350px 1fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div>
          <LocationList />
          <RouteControls setRoute={setRoute} />
        </div>

        <MapView route={route} />
      </div>
    </div>
  );
}

export default App;