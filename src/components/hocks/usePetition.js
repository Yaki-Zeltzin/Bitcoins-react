import { useEffect, useState } from "react"
import axios from "axios"

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()


    useEffect(() => {
        axios.get(`${API_URL}${endpoint}`)
            .then(data => {
                setData(data.data.data)
            })
            .catch(e => console.error(e))
    }, [])

    return data
}

export default usePetition