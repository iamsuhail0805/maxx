import {BrowserRouter,Routes,Route} from "react-router-dom"

import Layout from "./layout";
import Electronics from "./electronics";
import Jewle from "./jwelleres";
import Cloths from "./cloths";
import Wcloths from "./womwncloth";
import Signin from "./signin";
import Catagrry from "./catagrey";
import Signup from "./singup";
import Single from "./singlepage";
function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/catagrry" element={<Catagrry />}/>
            <Route path="/Electronics" element={<Electronics/>}/>
            <Route path="/jewelery" element={<Jewle/>}/>
            <Route path="/men's clothing" element={<Cloths/>}/>
            <Route path="/women's clothing" element={<Wcloths/>}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/products/:id" element={<Single />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;