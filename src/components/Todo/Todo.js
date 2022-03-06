import React from 'react'
import useFormState from '../../hooks/useFormState'
import useToggle from '../../hooks/useToggle'
import './Todo.css'

const Todo = ({ id, task, update, remove, toggle, completed})=>{
    const [editing, toggleEditing] = useToggle(false)
    const [editedTask, handleEditedTask] = useFormState(task)

    const handleEdit = ()=>{
        toggleEditing()
    }
    const handleDelete = ()=>{
        remove(id)
    }
    const handleToggle = ()=>{
        toggle(id)
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        update(id, editedTask)
        toggleEditing()
    }
    return (
        <li className='Todo'>
            {editing
            ? 
            <div>
                <form className='Todo-EditForm' onSubmit={handleSubmit}>
                    <input name='task' value={editedTask} onChange={handleEditedTask}/>
                    <button>Update</button>
                </form>
            </div>
            : 
            <div className='Todo-div'>
                <p className={completed ? 'Todo-task completed' :'Todo-task'} onClick={handleToggle}>{task}</p>
                <div className='Todo-buttons'>
                    <button><i className="fas fa-pen" onClick={handleEdit}></i></button>
                    <button><i className="fas fa-trash" onClick={handleDelete}></i></button>
                </div>
            </div>
            }
        </li>
    )
}

export default Todo