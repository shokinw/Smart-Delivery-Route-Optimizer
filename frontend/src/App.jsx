
import { useState } from "react";

import Dashboard from "./components/Dashboard";
import LocationList from "./components/LocationList";
import MapView from "./components/MapView";
import RouteControls from "./components/RouteControls";
import MultiStopRoute from "./components/MultiStopRoute";
import AddLocation from "./components/AddLocation";
import AddDelivery from "./components/AddDelivery";
import DeliveryList from "./components/DeliveryList";
import { optimizeRoute } from "./api/api";

function App() {
  const [route, setRoute] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [deliveryRefresh, setDeliveryRefresh] = useState(false);
  const [totalLocations, setTotalLocations] = useState(0);

  function refreshLocations() {
    setRefresh((prev) => !prev);
  }

  function refreshDeliveries() {
    setDeliveryRefresh((prev) => !prev);
  }

  async function handleOptimization(stops) {
    try {
      const res = await optimizeRoute(stops);
      setRoute(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background: "#2563eb",
          color: "white",
          padding: "25px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h1>🚚 Smart Delivery Route Optimizer</h1>
        <p>DSA + AI Based Delivery Planning System</p>
      </header>

      <div
        style={{
          padding: "25px",
        }}
      >
        <Dashboard
          totalLocations={totalLocations}
          route={route}
        />

        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gap: "20px",
          }}
        >
          <div>
            <LocationList
              refresh={refresh}
              refreshLocations={refreshLocations}
              setTotalLocations={setTotalLocations}
            />
          </div>

          <div>
            <MapView
              route={route}
              refresh={refresh}
            />
          </div>
        </div>

        <br />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <RouteControls setRoute={setRoute} />

          <MultiStopRoute
            onOptimize={handleOptimization}
          />
        </div>

        <br />

        <AddLocation refreshLocations={refreshLocations} />

        <br />

        <AddDelivery
          refreshDeliveries={refreshDeliveries}
        />

        <br />

        <DeliveryList
          refresh={deliveryRefresh}
        />
      </div>
    </div>
  );
}

export default App;