import { useEffect, useState } from "react";

function Catagrry(){
    const [data,setdata]=useState(null)
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setdata(json))
    },[])
    return(
        <>
        <div>
            {data ?(
                <div className="thinks2">
                    <h2 className="MAXX2">MAXX <br></br> E-Commerce</h2>
                     {data.map((item)=>
                        
                          <a className="thinks" href={item}><span>{item}</span></a>
                        )}
                </div>

            ):(
                <p>loding...</p>
            )}
        </div>
        </>
    )
}

export default Catagrry;