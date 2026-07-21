import { useEffect, useState } from "react";
import { 
  getLocations, 
  deleteLocation, 
  updateLocation 
} from "../api/api";


function LocationList({
  refresh,
  refreshLocations,
  setTotalLocations
}) {


  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {

    async function fetchData(){

      try{

        const res = await getLocations();

        setLocations(res.data);

        setTotalLocations(res.data.length);

      }
      catch(error){

        console.log(error);

      }

    }


    fetchData();


  },[refresh]);





  async function handleDelete(id){

    try{

      await deleteLocation(id);

      alert("Location Deleted 🗑️");

      refreshLocations();

    }
    catch(error){

      console.log(error);

    }

  }





  async function handleEdit(location){


    const name = prompt(
      "Enter new location name",
      location.name
    );


    if(!name) return;



    try{


      await updateLocation(

        location._id,

        {

          name:name,

          latitude:location.latitude,

          longitude:location.longitude

        }

      );



      alert("Location Updated ✅");


      refreshLocations();


    }
    catch(error){

      console.log(error);

    }


  }





  const filteredLocations = locations.filter((location)=>

    location.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );





  return (

    <div
    style={{
      marginTop:"20px"
    }}
    >


      <h2>
        📍 Delivery Locations
      </h2>



      <input

      type="text"

      placeholder="🔍 Search Location..."

      value={search}

      onChange={(e)=>setSearch(e.target.value)}

      style={{

        width:"100%",

        padding:"10px",

        margin:"15px 0",

        borderRadius:"8px",

        border:"1px solid #ccc"

      }}

      />



      <p>
        Total: {filteredLocations.length}
      </p>




      {
      filteredLocations.map((location)=>(


        <div

        key={location._id}

        style={{

          border:"1px solid #ddd",

          padding:"15px",

          marginBottom:"15px",

          borderRadius:"10px"

        }}

        >


          <h3>
            {location.name}
          </h3>



          <p>
            Latitude: {location.latitude}
          </p>


          <p>
            Longitude: {location.longitude}
          </p>




          <button

          onClick={()=>handleEdit(location)}

          style={{

            background:"#22c55e",

            color:"white",

            border:"none",

            padding:"8px 14px",

            borderRadius:"6px",

            marginRight:"10px"

          }}

          >

          ✏️ Edit

          </button>





          <button

          onClick={()=>handleDelete(location._id)}

          style={{

            background:"#ef4444",

            color:"white",

            border:"none",

            padding:"8px 14px",

            borderRadius:"6px"

          }}

          >

          🗑 Delete

          </button>



        </div>


      ))

      }



    </div>

  );

}


export default LocationList;