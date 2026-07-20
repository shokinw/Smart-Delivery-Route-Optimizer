import { useEffect, useState } from "react";
import { getLocations } from "../api/api";

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getLocations();
        console.log("Response:", res);
        console.log("Data:", res.data);
        setLocations(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Delivery Locations 📍</h2>

      <p>Total: {locations.length}</p>

      {locations.map((location) => (
        <div key={location._id}>
          <h3>{location.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default LocationList;