import React from 'react';
import "./pro.css"
import { Link } from 'react-router-dom';
function Pro(props) {
    return(
        
        <div class="productCard">
        <img src={props.image} width={"100%"} height={200}/>
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>${props.category}</p>
        <Link to={`/productdetails/${props.id}`}><button class="btn btn-outline-success mx-3">Product Details</button></Link>
        </div>
    
    );
}
export default Pro;