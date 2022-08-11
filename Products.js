import React from 'react'
import "./Products.css";
const Products = ({productitems,handleAddProduct}) => {
  return (
    <div className="products">
        {productitems.map((productitem)=>(
            <div className="card">
                <div className="product-image">
                    <img src={productitem.image}
                    alt={productitem.name}/>
                </div>
                <div className="product-name">
                   <h3>{productitem.name}</h3>
                </div>
                <div className="product-price">
                ₹{productitem.price}
                </div>
                <div>
                    <button className="product-add-button"
                    onClick={()=> handleAddProduct(productitem)}>
                        Add to cart
                    </button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default Products
