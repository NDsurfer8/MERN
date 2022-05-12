import React, {useState} from 'react'

const Form = (props) => {
//  DESTRUCTUREING PROPS
    const {addColor} = props

    const [colors, setColor] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        addColor(colors);
    }

    return (
        <div>
        <form onSubmit = {submitHandler}>
            <p>
                color:
                <input onChange={(e) => setColor(e.target.value)} type="text" />
            </p>
            
            <button >Add</button>
            
        </form>
        </div>
    )
}

export default Form