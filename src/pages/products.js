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
            <NavLink to="/cart">
            <div className="cart-base">
            <button >سبد خرید <span>{cart.length}</span> </button>
            </div>
            </NavLink>
            <section className="product-list">

               {products.map((product)=>{
                
                return<div key={product.id} >

                  <div className="product">
           <div className="img">
           <img src={product.image} alt={product.image}/>
          
           </div>
           <div className="product-detail">
           <div>{product.name}</div>
            <div>{product.price}</div>
           </div>
            <button className="add-btn" 
            onClick={()=> addProductHandler(product)}
            > {checkinCart(cart,product) ? "موجود در سبد خرید"  : "اضافه به سبد خرید"}</button>
        </div>
                  </div>
              
               })}
            </section>
        </Layout>
        </>
    )
}

export default Product;