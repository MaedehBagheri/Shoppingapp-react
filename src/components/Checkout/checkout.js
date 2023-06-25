import  {useCart} from "../../Providers/CartProvider"
import {Link} from "react-router-dom"
import { useAuth } from "../../Providers/AuthProvider";

function Checkout() {
  const auth = useAuth();
  const {cart , total} = useCart()


if(!cart.length) return <main>
    <Link to="/Products">
        go to shopping ?
    </Link>
</main>


  return (
    <div>
   {auth ? <>
    <section>
    <p>name : {auth.name}</p>
          <p>email : {auth.email}</p>
          <p>tel : {auth.phoneNumber}</p>
    </section>
    <section>
        {cart && cart.map((c) =>{
            return <div>
                {c.name} * {c.qua}: {c.qua * c.offPrice}
            </div>
        })}
        <hr/>
        <div>price : {total}</div>
    </section>
   </>:<p>please login !</p>}
    </div>
  );
}

export default Checkout;