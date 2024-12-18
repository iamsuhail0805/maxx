import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cloths(){

    const store=useNavigate()

    const [data,setdata]=useState(null)
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res=>res.json())
            .then(json=>setdata(json))
    },[])
    const navigate=(id)=>{
        store(`/products/${id}`)
    }
    return(
        <>
        <div>
            {data ?(
                <>      <div className="allcloths">
                     {data.map((item)=>
                        
                       <span className="clothsout">
                        <div className="cloths">
                            <a onClick={()=>navigate(item.id)}>
                            <img src={item.image}></img></a></div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <h3>{item.price}</h3>
                        </span>
                        
                        )}
                        </div>
                </>

            ):(
                <p>loding...</p>
            )}
        </div>
        </>
    )
}

export default Cloths;