import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const People = () => {
    const [apiState, setApiState] = useState()

    const { id } = useParams()

// calling the api with endpoint being PEOPlE and ID
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`) //?  making request from PokemonApi
            .then(successResponse => {
                console.log("success: ", successResponse.data)
                setApiState(successResponse.data)    //?  TAKING RESPONSE DOATA AND STORING IT IN STATE.
            })                          //successfull response.
            .catch(errorResponse => console.log("ERROR", errorResponse))


    }, [id])






    return (
        <div>
        {/* objects just use curly brace. .map cant map through objects only array */}
        {
            // api state contains all the info for ...
            apiState ?
            <div>
            <h1>{apiState.name}</h1>
            <p>Height: {apiState.height}</p>
            <p>Mass: {apiState.mass}</p>
            <p>EyeColor: {apiState.eye_color}</p>
            <p>BirthYear: {apiState.birth_year}</p>
            </div> : null
        }
    </div>
    )
}

export default People