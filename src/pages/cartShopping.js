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
        <main>
          {cart.length ? cart.map((item)=>{
       return  <div key={item.id} className="cart">
                <div>cart detail</div>
                <p>{item.name}</p>
                <p>{item.offPrice * item.qua}</p>
                <button onClick={()=> decrementHandler(item)}>remove</button>
                <button> {item.qua} </button>
                <button onClick={()=> incrementHandler(item)}>add</button>
            </div>

          }) : <p>no item in cart !</p>}

          <div className="cart">
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
//  const {total,cart}= useCart()

const originalTotalPrice =cart.length ? cart.reduce((acc,curr)=>acc + curr.qua * curr.price,0):
0;


return(
 <>
   <div>
    <h4>cart Summery</h4>
  </div>
  <div>
    <p>cart total:</p>
    <p>{originalTotalPrice}$</p>
  </div>
  <div>
  <p>cart discount:</p>
  <p>{originalTotalPrice - total}%</p>
  </div>
  <div>
    <p>net price:</p>
    <p>{total}$</p>
 <NavLink to="/checkout">
 <button>go to checkout</button>
 </NavLink>
  </div>
 </>

)
}