import React from 'react'
import { useParams } from 'react-router-dom'

const NumOrWord = () => {

    const params = useParams()
                        // testring route parameter to see if it is NAN
    const isWord = isNaN(params.numorword)

    return (
        
            isWord ? 
            <div> the word is: {params.numorword} </div> :
            <div> the number is: {params.numorword} </div>
        
        
    )
}

export default NumOrWord