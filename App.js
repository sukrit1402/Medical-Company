import "./index.css"
import Header from "./components/front/Header";
import data from "./components/back/data";

import {BrowserRouter as Router} from "react-router-dom"
import Routes from "./components/front/Routes";
import { useState } from "react";
function App() {
  
  const {productitems}=data;
  const[cartItems,setCartItems]=useState([]);

  const handleAddProduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id===product.id);
    if(productExist){
      setCartItems(cartItems.map((item)=>item.id===product.id?
      {...productExist,quantity:productExist.quantity+1}:item));
    }
    else{
      setCartItems([...cartItems,{...product,quantity:1}])
    }
  }
  const handleRemoveProduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id===product.id)
    if(productExist.quantity==1){
     setCartItems(cartItems.filter((item)=> item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item)=>item.id===product.id?{...productExist,quantity:productExist.quantity-1}:item)
      )
    }
  }
   
  const handleCartClearance=()=>{
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Routes productitems={productitems} 
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        />
   
      </Router>
    </div>
  );
}

export default App;
