import Layout from "../Layout/Layout";
import { products } from "../data";
import  "./products.css"
const Product =() =>{
    return(
        <>
        <Layout>
            <section>
               {products.map((product)=>{
                
                return <section className="product-list">
                    <Product 
                    name={product.name}
                     price={product.price}
                      img={product.image}/>
                </section>
               })}
            </section>
        </Layout>
        </>
    )
}

export default Product;