import { useState, useEffect } from "react";
import axios from "axios";


export default function FormCadastro () {

    const [ resposta, setResposta ] = useState("")

    

    useEffect(() => { 
        const promise = axios.get("http://localhost:5500/getcookie", { withCredentials: true })

        promise.then( res => {
            console.log(res)
            setResposta(res.data)
        }
        )
        promise.catch( err => {
            setResposta("erro ao receber cookie!")
            }  
        )
	},[]);   

    
    return (
        <>
            <h1>{resposta}</h1>
        </>
    )
}