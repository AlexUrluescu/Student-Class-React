
import "../assets/User.css"

const User = ({user}) => {
    return(
        <div className="user">
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </div>
    )
}

export default User;