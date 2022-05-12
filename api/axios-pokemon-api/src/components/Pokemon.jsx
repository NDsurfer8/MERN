import React, { useState } from 'react'
import axios from 'axios';

const Pokemon = (props) => {
    const [apiState, setApiState] = useState()

    // place api call here.
    const eventHandler = () =>{
    
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807") //?  making request from PokemonApi
        .then(successResponse => {
            console.log("success: ", successResponse.data) 
            setApiState(successResponse.data.results)//?  TAKING RESPONSE DOATA AND STORING IT IN STATE.
        })                          //successfull response.
        .catch(errorResponse => console.log("ERROR", errorResponse))

}

    return (
        <div>
            <button onClick={eventHandler} >Fetch Pokemon</button>
            
            {   apiState &&
                apiState.map(pcardmen => {
                    return(
                        <h2>{pcardmen.name}</h2>
                    )
                }) 
            }
            
        </div>
    )
}

export default Pokemon