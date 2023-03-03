
import { useNavigate } from "react-router-dom";
import { useState } from "react"

const initialForm = 
    {
        name: "",
        last_name: "",
        age: "",
        city: ""
    }


const FormStudents = ({addStudent}) => {

    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("s-a trimis formularul");
        console.log(form);

        addStudent(form)
        resetForm()

        navigate("/about")

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setForm(initialForm)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={form.name} name="name" placeholder="Name" />
                <input onChange={handleChange} type="text" value={form.last_name} name="last_name" placeholder="Last name" />
                <input onChange={handleChange} type="text" value={form.age} name="age" placeholder="Age" />
                <input onChange={handleChange} type="text" value={form.city} name="city" placeholder="City" />

                <input type="submit" value="Send" />

            </form>
        </div>
    )
}

export default FormStudents;