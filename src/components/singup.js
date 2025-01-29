function Signup(){
    return(
            <div className="singhead1">    
            <div className="signhead" >
            

                <form className="new">
                    <div className="signdiv">   
                    <h1 className="sightext">Sighup</h1>
                    <input type="text" placeholder="Enter Email" name="uname" required></input><br></br> 
                    <input type="password" placeholder="Create Password" name="psw" required></input>
                    <input type="password" placeholder="Confrim Password" name="psw" required></input>
                    <div className="confrim">
                        <a>Sighup</a>
                        
                    </div> 
                    </div>
                </form>
            </div>

            
        
                

            
        </div>
    )
}
export default Signup;