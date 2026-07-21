import {useEffect,useState} from "react";
import {getDeliveries} from "../api/api";


function DeliveryList({refresh}){


const [deliveries,setDeliveries]=useState([]);



useEffect(()=>{


async function load(){

const res=await getDeliveries();

setDeliveries(res.data);


}


load();


},[refresh]);



return(

<div>


<h2>
📦 Deliveries
</h2>



<p>
Total Deliveries: {deliveries.length}
</p>



{
deliveries.map((delivery)=>(


<div

key={delivery._id}

style={{

border:"1px solid #ddd",

padding:"15px",

margin:"10px",

borderRadius:"10px"

}}

>


<h3>

👤 {delivery.customerName}

</h3>


<p>

📍 {delivery.location}

</p>


<p>

Status: {delivery.status}

</p>



</div>


))

}



</div>


);


}


export default DeliveryList;