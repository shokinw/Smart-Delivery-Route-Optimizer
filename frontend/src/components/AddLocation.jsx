import { useState } from "react";
import { addLocation } from "../api/api";


function AddLocation({refreshLocations}) {


    const [form,setForm] = useState({

        name:"",
        latitude:"",
        longitude:""

    });



    function handleChange(e){

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    }



    async function handleSubmit(e){

        e.preventDefault();


        try{

            await addLocation({

                name:form.name,

                latitude:Number(form.latitude),

                longitude:Number(form.longitude)

            });


            alert("Location Added Successfully 🚚");


            setForm({

                name:"",
                latitude:"",
                longitude:""

            });


            refreshLocations();


        }
        catch(error){

            console.log(error);

        }


    }



    return (

        <div>

            <h2>
                Add Delivery Location 📍
            </h2>


            <form onSubmit={handleSubmit}>


                <input
                name="name"
                placeholder="Location Name"
                value={form.name}
                onChange={handleChange}
                />


                <input
                name="latitude"
                placeholder="Latitude"
                value={form.latitude}
                onChange={handleChange}
                />


                <input
                name="longitude"
                placeholder="Longitude"
                value={form.longitude}
                onChange={handleChange}
                />


                <button type="submit">
                    Add Location
                </button>


            </form>


        </div>

    );

}


export default AddLocation;