import ReactDom from "react-dom";
import './App.css';
import './App.js';
import profile from "./components/profile/profile.js";
import Nav from "./components/nav/nav.js";
import Profile from "./components/profile/profile.js";
import Product from "./components/product/product.js";
import Login from "./components/login/login.js";
import Users from "./components/users/users.js";
import Home from "./components/home/home.js";
import SignupPage from "./components/signup/signup.js";
import Pagenotfound from "./components/pagenotfound/pagenotfound.js";
import Productdetails from "./components/productdetails/productdetails.js";




import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Login/> */}
      <Nav/>
      <Routes>
      <Route path="/home" element={<Home/>} />

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignupPage/>} />

      <Route path="/profile" element={<Profile/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/productdetails/:id" element={<Productdetails/>} />
      <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
      {/* <Users/>
      
      <Product/> */}
      </div>
  );
}
export default App;
