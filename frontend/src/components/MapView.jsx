import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { getLocations } from "../api/api";


function MapView({ route, refresh }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {

  async function loadLocations() {

    try {

      const res = await getLocations();

      setLocations(res.data);

    } 
    catch(error) {

      console.error(error);

    }

  }


  loadLocations();


}, [refresh]);

  // Debug
  console.log("ROUTE FROM APP:", route);

  // Create coordinates for polyline
  const routeCoordinates = route
    ? route.path
        .map((name) => {
          const location = locations.find(
            (item) => item.name === name
          );

          if (!location) return null;

          return [
            location.latitude,
            location.longitude,
          ];
        })
        .filter(Boolean)
    : [];

  console.log("ROUTE COORDINATES:", routeCoordinates);

  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker
          key={location._id}
          position={[
            location.latitude,
            location.longitude,
          ]}
        >
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.latitude}, {location.longitude}
          </Popup>
        </Marker>
      ))}

      {routeCoordinates.length >= 2 && (
        <Polyline
          positions={routeCoordinates}
          pathOptions={{
            color: "blue",
            weight: 6,
          }}
        />
      )}
    </MapContainer>
  );
}

export default MapView;