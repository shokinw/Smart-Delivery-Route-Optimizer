import {useState} from "react";
import {addDelivery} from "../api/api";


function AddDelivery({refreshDeliveries}){


const [form,setForm]=useState({

customerName:"",
location:""

});



function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}



async function submit(e){

e.preventDefault();


try{


await addDelivery(form);


alert("Delivery Added 🚚");


setForm({

customerName:"",
location:""

});


refreshDeliveries();



}
catch(error){

console.log(error);

}


}



return (

<div>


<h2>
Create Delivery 📦
</h2>


<form onSubmit={submit}>


<input

name="customerName"

placeholder="Customer Name"

value={form.customerName}

onChange={handleChange}

/>



<input

name="location"

placeholder="Delivery Location"

value={form.location}

onChange={handleChange}

/>



<button>

Add Delivery

</button>



</form>


</div>

);


}


export default AddDelivery;