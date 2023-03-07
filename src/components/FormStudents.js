
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const initialForm = 
    {
        name: "",
        last_name: "",
        age: "",
        city: ""
    }


const FormStudents = ({addStudent, edit, setEdit, salutare, editStudent}) => {

    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if(edit){
            setForm(edit)
        }

        else{
            setForm(initialForm)
        }
    }, [edit])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(edit === null){
            addStudent(form)
        }

        else{
            editStudent(form)
        }


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
        setEdit(null)
    }


    const handleSalutare = () => {
        salutare()
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

            <button onClick={handleSalutare}>Hei</button>

            <Link to="/about">Back</Link>
        </div>
    )
}

export default FormStudents;