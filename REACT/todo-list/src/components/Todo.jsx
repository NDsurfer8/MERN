import React, { useState } from 'react'

function Todo(props) {
    // destructure addTask from props
    const { addTask } = props

    // *set state for input
    const [task, setTask] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        addTask({
            task: task,
            isComplete: false
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Task: </label>
                <input type="text" onChange={(e) => setTask(e.target.value)} />
                <button>add</button>
            </form>
        </div>
    )
}



export default Todo