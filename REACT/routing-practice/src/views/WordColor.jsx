import React from 'react'
import { useParams } from 'react-router-dom'
const WordColor = () => {

    const {word, color, colorbg} = useParams()



    return (
        <div style={{color: color, backgroundColor: colorbg}}>The word is:{word}</div>
    )
}

export default WordColor