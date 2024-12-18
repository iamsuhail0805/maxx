function Header(){
    return(
        <div className="header">
            <h3 className="a">MAXX</h3>
            <input className="a" type="text" placeholder="Search" ></input> 
            <ul>
                {/* <li className="a">Features</li> */}
            
            <li className="a"> Themes</li>
            <li className="a">About</li>
            {/* <li className="a">Integrations</li> */}
            </ul>
            <a className='b1' href="/signin">SignIn</a>
            <a className='b2' href="/signup">SignUp</a>
            <i id="icon2"   class="fa-solid fa-magnifying-glass"></i>



        </div>
    )
}
export default Header;