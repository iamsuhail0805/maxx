import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Catagrry from "./catagrey";

function Layout(){
    return(
        <>
        <header>
            <Header/>
        </header>
        <section>
            <Catagrry/>
        </section>
        <footer>
            <Footer/>
        </footer>
        </>

    )
}

export default Layout;