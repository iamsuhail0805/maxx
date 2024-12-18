import { useEffect, useState } from "react";

function Products(){
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
                <>
                    <div className="prodiv">

                     {data.map((item)=>
                       <span className="productspan"> {item}</span>
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

export default Products;