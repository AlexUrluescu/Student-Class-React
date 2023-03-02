
import User from "../components/User";

import "../assets/About.css"

import { useUsers } from "../hooks/useUsers";

const About = () => {

    const { users, loading, error } = useUsers()

    return(
        <div>
            <h2>About</h2>
            <div className="users-container">
                {loading && <h2>Loading ...</h2>}
                {error && <h2>Error</h2>}
                {users.map((user, index) => (
                    <User key={index} user={user}/>
                ))}
            </div>
            
        </div>
    )
}

export default About;