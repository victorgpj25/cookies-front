import { useState, useEffect } from "react";
import axios from "axios";


export default function FormCadastro () {

    const [ resposta, setResposta ] = useState("")

    useEffect(() => { 
        const promise = axios.get("http://localhost:5500/deletecookie", { withCredentials: true })

        promise.then( res => {
            setResposta(res.data)
        }
        )
        promise.catch( err => {
            setResposta("erro ao deletar cookie!")
            }  
        )
	},[]);   

    
    return (
        <>
            <h1>{resposta}</h1>
        </>
    )
}