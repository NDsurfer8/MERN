import React, { useState } from 'react'

const Display = (props) => {

    const { todos, deleteTask, completeTasks } = props

    const deleteHandler = (e, index) => {
        e.preventDefault()
        deleteTask(index)


    const todoClasses = [];
        if(todo.isComplete){
            todoClasses.push('line-through');
        }
        
    }
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <div  key={index} >
                            {/* data being displayed */}<span className='line-through'>{todo.task}</span>
                            {/* <span { todo.isComplete ? style = { textDecoration : "line-through" } : null }>  </span> */}
                            <input onChange={(e) => completeTasks(index)} 
                                type="checkbox" checked={todo.isComplete}/>
                                {/* DELETEING TASK AT INDEX WHEN THE EVENT IS TRIGGERED BY ONCLICK */}
                            <button onClick={(e) => deleteHandler(e, index)}>Delete</button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Display