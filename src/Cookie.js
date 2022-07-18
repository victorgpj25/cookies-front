import { useState, useEffect } from "react";
import axios from "axios";


export default function FormCadastro () {

    const [ resposta, setResposta ] = useState("")

    

    useEffect(() => { 
        const promise = axios.get("http://localhost:5500/checkcookie", { withCredentials: true })

        promise.then( res => {
            setResposta(res.data)
        }
        )
        promise.catch( err => {
            setResposta("erro ao checar cookie!")
            }  
        )
	},[]);   

    
    return (
        <>
            <h1>{resposta}</h1>
        </>
    )
}