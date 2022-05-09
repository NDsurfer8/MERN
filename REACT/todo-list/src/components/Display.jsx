import React, { useState } from 'react'

const Display = (props) => {
    // state for Delete
const [task, setDelete] = useState('')

    
const {todos, deleteTask} = props

const submitHandler =(e, index)=>{
    e.preventDefault()
    deleteTask(index)
}

    return (
        <div>
            {
                todos.map((todo, index)  => {
                    return(
                        <form key={index} onSubmit={submitHandler}>

                        {todo.task}
                        {/* <input type="checkbox" checked={complete} onChange={e => setComplete(e.target.checked)}/> Completed */}
                        <button onClick={(e) => setDelete(e, index)}>Delete</button>
                        
                        </form>
                    )
                })
            }
        </div>
    )
}



export default Display