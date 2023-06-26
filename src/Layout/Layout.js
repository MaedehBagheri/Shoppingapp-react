import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";

const Layout =({children}) =>{
    return(
        <>
        <header><Navigation/></header>
        {children}
<div><Footer/></div>
        </>
    )
}

export default Layout;