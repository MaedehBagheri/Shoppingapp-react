import Navigation from "../components/navigation/navigation";

const Layout =({children}) =>{
    return(
        <>
        <header><Navigation/></header>
        {children}

        </>
    )
}

export default Layout;