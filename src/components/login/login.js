import { useState } from "react";
import "./login.css";




function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <h2 className="neon-text">Login</h2>
        
  <div class="row">
    <div class="col">
    <button type="submit" className="neon-button">Google</button>
    </div>
    <div class="col">
    <button type="submit" className="neon-button">Facebook</button>
    
  </div>
</div>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="neon-button">Login</button>
        <h6 className="neon-text" style={{fontSize:"15px", marginTop:"20px"}}>Not a member?SIGNUP NOW</h6>
       
      </form>
    </div>
  );
}

export default Login;
