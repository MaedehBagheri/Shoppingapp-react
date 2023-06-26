import  {useCart} from "../../Providers/CartProvider"
import {Link} from "react-router-dom"
import { useAuth } from "../../Providers/AuthProvider";
import "./checkout.css"
function Checkout() {
  const auth = useAuth();
  const {cart , total} = useCart()


if(!cart.length) return <main className="shopping-back">
    <Link to="/Products">
        go to shopping ?
    </Link>
</main>


  return (
    <div className="checkout">
   {auth ? <>
    <section className="user-detail">
    <p>نام : {auth.name}</p>
          <p>نام خانوادگی : {auth.email}</p>
          <p>شماره تماس : {auth.phoneNumber}</p>
    </section>

    <section className="shop-detail">
        {cart && cart.map((c) =>{
            return <div>
                {c.name} * {c.qua}: {c.qua * c.offPrice}
            </div>
        })}
        <hr/>
        <div>قیمت کل: {total}</div>
    </section>
   </>:<p>please login !</p>}
    </div>
  );
}

export default Checkout;