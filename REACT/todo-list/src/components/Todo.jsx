import React, { useState } from 'react'

function Todo (props) {
    // *set state for input
const [task, setTask]= useState("")

const submitHandler = (e) => {
    e.preventDefault()
    props.addTask({
        task : task,
        isComplete : false
    })

}




    return (
        <fieldset>
            <form onSubmit={submitHandler}>
                <label>Task: </label>
                <input type="text" onChange={(e)=> setTask(e.target.value) }/>
                <button>add</button>
            </form>
        </fieldset>
    )
}



export default Todo