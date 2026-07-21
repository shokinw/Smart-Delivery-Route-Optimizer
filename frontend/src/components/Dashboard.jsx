function Dashboard({ totalLocations, route }) {

  const distance = route ? route.distance : 0;

  const eta = Math.ceil(distance / 40 * 60);

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "25px"
      }}
    >

      <div style={cardStyle}>
        <h3>📍 Locations</h3>
        <h1>{totalLocations}</h1>
      </div>

      <div style={cardStyle}>
        <h3>🚚 Route</h3>
        <h1>{route ? "Ready" : "-"}</h1>
      </div>

      <div style={cardStyle}>
        <h3>📏 Distance</h3>
        <h1>{distance} km</h1>
      </div>

      <div style={cardStyle}>
        <h3>⏱ ETA</h3>
        <h1>{eta} min</h1>
      </div>

    </div>

  );

}

const cardStyle = {
  background: "#2563eb",
  color: "white",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
};

export default Dashboard;