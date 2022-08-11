import React from 'react'
import {Route,Switch}from "react-router-dom"
import Products from './Products'

import Cart from './Cart'
import Signup from './Signup'
const Routes = ({productitems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  
  return (
    <div>
      <Switch>
         <Route path="/" exact>
          
            <Products productitems= {productitems}  handleAddProduct={handleAddProduct}/>
            
         </Route>
         
         <Route path="/cart" exact>
            <Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
            />
        </Route>

        <Route path ="/signup" exact>
          <Signup/>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
