import {NavLink} from "react-router-dom"


import "../assets/NavBar.css"

const NavBar = () => {
    return(
        <nav className="navigation">
            <ul>
                <li><NavLink className={({isActive}) => isActive ? "selected" : "link"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "selected" : "link"} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "selected" : "link"} to="/students">Students</NavLink></li>
            </ul>
        </nav>
    )
}


export default NavBar;