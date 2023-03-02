
import { useState, useEffect } from "react"

export const useUsers = () => {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fecthUsers = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()

                console.log(data);
                setUsers(data);
                setLoading(false)

            } catch (error) {
                console.log(error);
                setError(error)
            }
       
        }

        fecthUsers()
    }, [])

    return { users, loading, error }
}