import { useEffect, useState } from "react";
import { getLocations, getShortestRoute } from "../api/api";

function RouteControls({ setRoute })  {
  const [locations, setLocations] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [routeInfo, setRouteInfo] = useState(null);

  useEffect(() => {
    async function loadLocations() {
      const res = await getLocations();
      setLocations(res.data);

      if (res.data.length >= 2) {
        setStart(res.data[0].name);
        setEnd(res.data[1].name);
      }
    }

    loadLocations();
  }, []);

  async function findRoute() {
    try {
      const res = await getShortestRoute(start, end);
      console.log("ROUTE RESULT:", res.data);

        setRoute(res.data);      // Send to App.jsx
        setRouteInfo(res.data);  // Display distance and path
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Find Shortest Route 🚚</h2>

      <select value={start} onChange={(e) => setStart(e.target.value)}>
        {locations.map((location) => (
          <option key={location._id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>

      {"  "}

      <select value={end} onChange={(e) => setEnd(e.target.value)}>
        {locations.map((location) => (
          <option key={location._id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>

      {"  "}

      <button onClick={findRoute}>
        Find Route
      </button>

      {routeInfo && (
        <div style={{ marginTop: "20px" }}>
          <h3>Distance: {routeInfo.distance} km</h3>

          <p>
            Route: {routeInfo .path.join(" → ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default RouteControls;