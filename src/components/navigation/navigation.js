import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./navigation.css"
import logo from "../../assets/images/Frame 2.png";
import { useAuth } from "../../Providers/AuthProvider";
const Navigation =() =>{
    const userData =useAuth();
    return(
        <nav className="navbar">
           <div>
            <ul className="nav-list">
                <li className="nav-item login">
                    <NavLink to={userData ? "/profile" : "/Login"}>
                        {userData ? "پروفایل": "ثبت نام"}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Products">محصولات</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Home">خانه</NavLink>
                </li>
            </ul>
           </div>
           <div><img src={logo} alt ={logo} /></div>
        </nav>
    )
}

export default Navigation;