import { useState } from "react";
import "./product.css";
// import { productsdata } from "./productdata";
import Pro from "./pro";
import axios from 'axios';
import Electronics from "./electronics/electronics";

function Product() {
  let [products, setProducts] = useState([]);
  const getAllProducts=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((productsdata)=>{setProducts(productsdata.data)})
    .catch((errordata)=>{alert("error")})

  };

  const getAllele=()=>{
    axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((productsdata)=>{setProducts(productsdata.data)})
    .catch((errordata)=>{alert("error")})

  };

  const getAlljew=()=>{
    axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((productsdata)=>{setProducts(productsdata.data)})
    .catch((errordata)=>{alert("error")})

  };

  const getAllmen=()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((productsdata)=>{setProducts(productsdata.data)})
    .catch((errordata)=>{alert("error")})

  };

  const getAllwom=()=>{
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((productsdata)=>{setProducts(productsdata.data)})
    .catch((errordata)=>{alert("error")})

  };



  return (
    <div className="products">
        <div class="radioSection"><div className="form-check form-check-inline">
        <input
        onChange={getAllProducts}
          defaultChecked
          name="category"
          type="radio"
          className="form-check-input"
        />
        <label class="form-check-label">ALL</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAllele} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Electronics</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAlljew} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Jewelery</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAllmen} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Men'sClothing</label>
      </div>
      <div className="form-check form-check-inline">
        <input onChange={getAllwom} name="category" type="radio" className="form-check-input" />
        <label class="form-check-label">Women'sClothing</label>
      </div></div><br></br>
        <h2 style={{textAlign:"center", color:"green" , fontStyle:"italic" , fontFamily:"times"}}>Number Of Products : {products.length}</h2>
        <div class="productSection">
        {/* <Pro title={products[0].title} image={products[0].image} price={products[0].price}/>
        <Pro title={products[1].title} image={products[1].image} price={products[1].price}/>
        <Pro title={products[2].title} image={products[2].image} price={products[2].price}/>
        <Pro title={products[3].title} image={products[3].image} price={products[3].price}/>
        <Pro title={products[4].title} image={products[4].image} price={products[4].price}/>
        <Pro title={products[5].title} image={products[5].image} price={products[5].price}/>
        <Pro title={products[6].title} image={products[6].image} price={products[6].price}/>
        <Pro title={products[7].title} image={products[7].image} price={products[7].price}/>
        <Pro title={products[8].title} image={products[8].image} price={products[8].price}/>
        <Pro title={products[9].title} image={products[9].image} price={products[9].price}/>
        <Pro title={products[10].title} image={products[10].image} price={products[10].price}/>
        <Pro title={products[11].title} image={products[11].image} price={products[11].price}/>
        <Pro title={products[12].title} image={products[12].image} price={products[12].price}/>
        <Pro title={products[13].title} image={products[13].image} price={products[13].price}/>
        <Pro title={products[14].title} image={products[14].image} price={products[14].price}/>
        <Pro title={products[15].title} image={products[15].image} price={products[15].price}/>
        <Pro title={products[16].title} image={products[16].image} price={products[16].price}/>
        <Pro title={products[17].title} image={products[17].image} price={products[17].price}/>
        <Pro title={products[18].title} image={products[18].image} price={products[18].price}/>
        <Pro title={products[19].title} image={products[19].image} price={products[19].price}/> */}
      
        {
          products.map(function(element, index){
            return <Pro title={element.title} 
                  image={element.image} 
                  price={element.price}
                  category={element.category}
                  id={element.id}/>
          })
        }

        
        
        </div>

        
      
    </div>
  );
}

export default Product;
