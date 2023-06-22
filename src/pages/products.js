import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { products } from "../data";
import  "./products.css";
import {toast} from "react-toastify"
function checkinCart(cart,productId){
   return cart.find((cart)=> cart.id === productId.id)
}


const Product =() =>{
    const {cart} =useCart()
    const dispatch =useCartActions();



const addProductHandler=(product) =>{
toast.success(`${product.name} added to cart !`)
dispatch({type:"add-to-cart" ,payload:product})
}


    return(

        <>
        <Layout>
            <section className="product-list">
            <NavLink to="/cart">
            <button>cart <span>{cart.length}</span> </button>

            </NavLink>
               {products.map((product)=>{
                
                return<div key={product.id} >
                  <div className="product">
            <div>{product.image}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button 
            onClick={()=> addProductHandler(product)}
            > {checkinCart(cart,product) ? "in cart"  : "add to Cart"}</button>
        </div>
                  </div>
              
               })}
            </section>
        </Layout>
        </>
    )
}

export default Product;