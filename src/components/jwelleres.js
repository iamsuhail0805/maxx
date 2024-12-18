import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Jewle(){
    const store=useNavigate()

    const [data,setdata]=useState(null)
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
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
                <>
                    <div className="jwelleres">
                     {data.map((item)=>
                        
                       <span className="jewspan">
                        <div className="jwellimgs">
                         <a onClick={()=>navigate(item.id)}>   
                           <img src={item.image}></img>
                           </a>
                            </div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <h3>{item.price}</h3>
                        </span>
                        
                        )}
                        </div>
                </>

            ):(
                <p>loding</p>
            )}
        </div>
        </>
    )
}

export default Jewle;