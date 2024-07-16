import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
function Nav(){
    return (
        <div className='navbarcontainer'>
            <div className='title'>
                <h2 className='neon-text' style={{fontStyle:"italic"}}>Shoppie</h2>
            </div>
            <div className='menus'>
                {/* <a href=''>Home</a>
                <a href=''>Profile</a>
                <a href=''>AboutUs</a>
                <a href=''>Contact</a> */}
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Users</Link>
                <Link to="/product">Product</Link>
                <Link to="/contactus">ContactUs</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/cart">Cart</Link>
                <button className="btn btn-outline-success ">LogOut</button>

            </div>
            
        </div>
    );
}
export default Nav;