import React, { useState } from 'react';
import './signup.css'; // Import CSS file for styling




function SignupPage() {
  return (
    <div className="container">
      <form className="login-form">
        <h2 className="neon-text">SignUp</h2>
        
  <div class="row">
    <div class="col">
    <button type="submit" className="neon-button">Google</button>
    </div>
    <div class="col">
    <button type="submit" className="neon-button">Facebook</button>
    
  </div>
</div>
        <input type="text" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Create password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />
        <button type="submit" className="neon-button">SignUp</button>
        <h6 className="neon-text" style={{fontSize:"15px", marginTop:"20px"}}>Already Have An Account?LOGIN</h6>
       
      </form>
    </div>
  );
}


export default SignupPage;
