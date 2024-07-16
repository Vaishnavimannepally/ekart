import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import "./productdetails.css";
import axios from "axios";
function Productdetails() {
    let {id} = useParams();
    let [state, setState] = useState({
        id:null,
        title:null,
        description:null,
        price:null,
        category:null,
        image:"",
    });

    useEffect(()=>{
        getproductData();
    },[]);

    const getproductData = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((productInfo)=>{
            setState(productInfo.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("Error while getting specific product data");
        });
    }
    return (
        <div className="ptc">
            <div className="ic">
                <img src={state.image} width={"100%"} height={400} style={{borderRadius:"20px" , boxShadow:"0 0 10px white"}} />
                </div>
            <div className="cc">
                <dl>
                    <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"larger"}}>Product Title</dt>
                    <dd>{state.title}</dd>
                    <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"larger"}}>Price</dt>
                    <dd>{state.price}</dd>
                    <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"larger"}}>Description</dt>
                    <dd>{state.description}</dd>
                    <dt style={{fontStyle: "italic" , fontWeight:"bold" , fontSize:"larger"}}>Category Name</dt>
                    <dd>{state.category}</dd>
                    
                    
                </dl>
                <button>Add to cart</button>
            </div>
            
            
        </div>
    );  
} 
export default Productdetails;