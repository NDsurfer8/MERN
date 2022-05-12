import React, { useState } from 'react'

const Main = (props) => {
    const [people,setPeople] = useState([])

    const eventHandler = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json()) // successful response
            .then(response => setPeople(response.results)) //set state to save respones
            .then(successResponse => console.log("SUCCESS:", successResponse))
            .catch(errorResponse => console.log("error",errorResponse)) // unsuccessful response
    }


    return (
        <div>
        <button onClick={eventHandler}>call API</button>

        {people.length > 0 && 
            people.map((person, index)=>{
        return (
            <li key={index}>{index}: {person.name}</li>
            )
        })}
        </div>
    )
}

export default Main