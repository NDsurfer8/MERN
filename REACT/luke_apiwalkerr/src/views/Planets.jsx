import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const [apiState, setApiState] = useState()

    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`) //?  making request from PokemonApi
            .then(successResponse => {
                console.log("success: ", successResponse.data)
                setApiState(successResponse.data)    //?  TAKING RESPONSE DOATA AND STORING IT IN STATE.
            })                          //successfull response.
            .catch(errorResponse => console.log("ERROR", errorResponse))


    }, [id])
    // allows for page to rerender everytime id changes in url .






    return (
        <div>
        {/* objects just use curly brace. .map cant map through objects only array */}
        {
            
            <div>
            {/* objects just use curly brace. .map cant map through objects only array */}
            {
                apiState ?
                <div>
                <h1>{apiState.name}</h1>
                <p>Rotation period: {apiState.rotation_period}</p>
                <p>Gravity: {apiState.gravity}</p>
                <p>Population: {apiState.population}</p>
                <p>terrain: {apiState.terrain}</p>
                </div> : null
            }
        </div>
            
        }
    </div>
    )
}

export default Planets