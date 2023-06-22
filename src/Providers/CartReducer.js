const cartReducer =(state,action) =>{

    switch(action.type){
     case "add-to-cart":

        const updatedCart =[ ...state.cart];
        const updatedItemIndex =updatedCart.findIndex(
            (item)=>{
            return item.id === action.payload.id
        });
        if(updatedItemIndex < 0){
            updatedCart.push({ ...action.payload,qua :1})
        }else{
            const updatedItem ={...updatedCart[updatedItemIndex]};
            updatedItem.qua++;
            updatedCart[updatedItemIndex]=updatedItem;
        }
        return {...state,cart:updatedCart,total:state.total + action.payload.offPrice};


        case "remove-product" :{
            const updatedCart =[ ...state.cart];
            const updatedItemIndex =updatedCart.findIndex(
                (item)=>{
                return item.id === action.payload.id
            });
            const updatedItem ={...updatedCart[updatedItemIndex]};
            if(updatedItem.qua === 1){
const filteredCart=updatedCart.filter((cart) => cart.id !== action.payload.id);
return {...state,cart:filteredCart}
            }else{
                updatedItem.qua--;
            updatedCart[updatedItemIndex]=updatedItem;
        }
        return{...state,cart:updatedCart,total:state.total - action.payload.offPrice};
        }
        default : return state;
    }


}

export default cartReducer;