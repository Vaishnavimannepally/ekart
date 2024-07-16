import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Profile from './components/profile/profile';
import Nav from "./components/nav/nav.js";
import Product from "./components/product/product.js";
import Login from "./components/login/login.js";
import Users from "./components/users/users.js";
import Home from "./components/home/home.js";
import SignupPage from "./components/signup/signup.js";
import Pagenotfound from "./components/pagenotfound/pagenotfound.js";
import Productdetails from "./components/productdetails/productdetails.js";




import {BrowserRouter,Routes,Route} from 'react-router-dom';


import App from './App';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));