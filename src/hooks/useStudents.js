import { useEffect, useState } from "react"

import data from "../dataJSON/data.json"

export const useStudents = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {

        try {
            setStudents(data)
            
        } catch (error) {
            console.log(error);
        }

    }, [])

    return {students}
}
