
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const initialForm = 
    {
        name: "",
        last_name: "",
        age: "",
        city: ""
    }


const FormStudents = ({addStudent, edit, setEdit, editStudent}) => {

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

        console.log("s-a trimis formularul");
        console.log(form);

        if(form.id === null){
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

    return(
        <div>
            {edit ? <h2>Edit</h2> : <h2>Add</h2>}
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