import React, { useState } from 'react'
import axios from 'axios'

export default (props) => {

    const {effectFlip, loaded, setLoaded} = props
     
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', {
            title: title,
            price: price,
            description: description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))  
            effectFlip()
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <p>
                    <label>Title:</label>
                    <input value={title} type="text" onChange={ e => setTitle(e.target.value) } />
                </p>
                <p>
                    <label>Price:</label>
                    <input value={price} type="text" onChange={ e => setPrice(e.target.value) } />
                </p>
                <p>
                    <label>Description:</label>
                    <input value={description} type="text" onChange={ e => setDescription(e.target.value) } />
                </p>
                <button>Create</button>
            </form>
        </div>
    )
}

