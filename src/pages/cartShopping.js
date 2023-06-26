import Layout from "../Layout/Layout";
import { useCart,useCartActions } from "../Providers/CartProvider";
import {NavLink} from "react-router-dom"
import "./cartShopping.css"
const Cart =() =>{
    const {cart,total} =useCart();
   const dispatch =useCartActions()

const incrementHandler=(cartItem)=>{
dispatch({type:"add-to-cart",payload: cartItem})
}
const decrementHandler=(cartItem)=>{
    dispatch({type:"remove-product",payload: cartItem})
    }


    return(
        <>
       <Layout>
        <main className="cart-page">
          {cart.length ? cart.map((item)=>{
       return  <div key={item.id} className="cart">

  <div className="cart-center">

  <div><img src={item.image} alt={item.name}/></div>
 <div className="cart-detail">
 <p>{item.name}</p>
  <p>{item.offPrice * item.qua}</p>
 </div>
   <div className="btns">
   <button className="btn remove" onClick={()=> decrementHandler(item)}>remove</button>
    <button className="btn qua"> {item.qua} </button>
    <button className="btn add" onClick={()=> incrementHandler(item)}>add</button>
   </div>
  </div>

            </div>

          }) : <p>no item in cart !</p>}

          <div className="cart-summery">
            <CartSummery cart={cart}  total={total}/>
          </div>
        </main>
       </Layout>
        
        </>
    )
}

export default Cart;


// cartSummery

const CartSummery =({cart,total})=>{

const originalTotalPrice =cart.length ? cart.reduce((acc,curr)=>acc + curr.qua * curr.price,0):
0;


return(
 <>
   <div>
    <h4>cart Summery</h4>
  </div>
  <div className="summery-text">
    <p>cart total:</p>
    <p>{originalTotalPrice}$</p>
  </div>
  <div className="summery-text">
  <p>cart discount:</p>
  <p>{originalTotalPrice - total}%</p>
  </div>
  <div className="summery-text">
    <p>net price:</p>
    <p>{total}$</p>

  </div>
  <div>
  <NavLink to="/signup?redirect=checkout">
 <button>go to checkout</button>
 </NavLink>
  </div>
 </>

)
}