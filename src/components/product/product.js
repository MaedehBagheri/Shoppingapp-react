import "./product.css"


const Product =({price,name,img}) =>{
    return (
        <>
        
        <div className="product">
            <div>{img}</div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
        
        </>
    )
}

export default Product ;