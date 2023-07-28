import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './CriptoPage.css'

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams()

    const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => {
                setCripto(data.data.data)
            })
            .catch(e => console.error(e))
   
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => {
                setHistory(data.data.data)
            })
            .catch(e => console.error(e))
    }, [])
     
    return (
        <>
            <h1>Soy una criptomoneda {params.id}</h1>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre:</span>{cripto.name}</li>
                    <li><span className="label">Simbolo:</span>{cripto.symbol}</li>
                </ul>
            </div>
            <h2>Historial</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({ date, priceUsd, time }) => (
                            <tr key={time}>
                                <td>{new Date(date).toDateString()}</td>
                                <td>{parseFloat(priceUsd,3)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}

export default CriptoPage