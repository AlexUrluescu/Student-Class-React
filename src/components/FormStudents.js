
import { useNavigate } from "react-router-dom";

const FormStudents = () => {

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("s-a trimis formularul");
        navigate("/about")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="last_name" placeholder="Last name" />
                <input type="text" name="age" placeholder="Age" />
                <input type="text" name="city" placeholder="City" />

                <input type="submit" value="Send" />

            </form>
        </div>
    )
}

export default FormStudents;