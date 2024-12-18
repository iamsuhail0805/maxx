function Signin (){
    return(
        <div className="signhead" >
            

            <form>
                 <div className="signdiv">   
                <h1 className="sightext">Sighin</h1>
                <input type="text" placeholder="Enter Username" name="uname" required></input><br></br> 
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                <div className="forget">
                    <a  href="#"><p>Forgetpassword?</p></a>
                </div>
                <div className="loginpage">
                <a href="#"  className="loginpagee">LOGIN</a>
                </div>
                </div>
            </form>

            
        </div>
        )
}

export default Signin;

