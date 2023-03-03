
import "../assets/About.css"

import { Link, Outlet } from "react-router-dom"


const About = () => {

    return(
        <div>
            <h2>About</h2>
            <div>
                <Link to="/about/edit">Form</Link>
                {<Outlet/>}
            </div>
            
        </div>
    )
}

export default About;