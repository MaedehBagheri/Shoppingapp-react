import Navigation from "../components/navigation/navigation";

const Layout =({children}) =>{
    return(
        <>
        <header><Navigation/></header>
        {children}
        {/* <div>footer</div>
        <div>explain</div> */}
        </>
    )
}

export default Layout;