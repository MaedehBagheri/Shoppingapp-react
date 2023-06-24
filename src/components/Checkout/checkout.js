import { useAuth } from "../../Providers/AuthProvider";

const Checkout =()=>{
    const auth =useAuth()
    return(
        <>
      {auth ? (
          <div>
          <p>name :{auth.name}</p>
          <p>email:{auth.email}</p>
          <p>tel :{auth.tel}</p>
      </div>
      ):
      (<p>please login !</p>)
      }
        </>
    )
}

export default Checkout;