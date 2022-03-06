import React from 'react'
import useFormState from './hooks/useFormState'
import './NewTodoForm.css'

const NewTodoForm = ({ addTodo })=>{
    const [task, setTask, resetTask] = useFormState('')

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        addTodo({task})
        resetTask()
    }
    return (
        <div className='NewTodoForm'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='task' onChange={setTask} value={task}/>
                    <button>make</button>
                </form>
        </div>
    )
}
export default NewTodoForm