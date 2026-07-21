import { useEffect, useState } from "react";
import { getLocations } from "../api/api";

function MultiStopRoute({ onOptimize }) {

  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {

    async function load() {
      const res = await getLocations();
      setLocations(res.data);
    }

    load();

  }, []);

  function toggleLocation(name) {

    if (selected.includes(name)) {

      setSelected(
        selected.filter(item => item !== name)
      );

    } else {

      setSelected([
        ...selected,
        name
      ]);

    }

  }

  return (

    <div
      style={{
        marginTop:20,
        border:"1px solid #ddd",
        padding:20,
        borderRadius:10
      }}
    >

      <h2>🚚 Multi Stop Delivery</h2>

      {

        locations.map(location=>(

          <div key={location._id}>

            <input

              type="checkbox"

              checked={selected.includes(location.name)}

              onChange={()=>toggleLocation(location.name)}

            />

            {" "}

            {location.name}

          </div>

        ))

      }

      <br/>

      <button
        onClick={()=>onOptimize(selected)}
      >

        Optimize Route

      </button>

    </div>

  );

}

export default MultiStopRoute;