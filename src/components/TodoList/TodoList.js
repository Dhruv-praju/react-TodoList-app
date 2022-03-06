import React,{useState} from 'react'
import NewTodoForm from '../NewTodoForm/NewTodoForm'
import {v4 as uuid} from 'uuid'
import Todo from '../Todo/Todo'
import './TodoList.css'

const TodoList = ()=>{
    const [todos, setTodos] = useState([])

    const addTodo = (todo)=>{
        let newTodo = {...todo, id:uuid(), completed:false}

        setTodos(prevTodos => [...prevTodos, newTodo])
    }
    const remove = (id)=>{
        setTodos(prevTodos => prevTodos.filter(td => td.id !== id))
    }
    const update = (id, updatedTask)=>{
        setTodos(prevTodos => prevTodos.map(todo=>{
            if(todo.id === id) todo.task = updatedTask
            return todo
        }))
    }
    const toggleCompletion = (id)=>{
        setTodos(prevTodos => prevTodos.map(todo=>{
            if(todo.id === id) return {...todo, completed: !todo.completed}
            return todo
        }))
    }
    const showTodos = ()=>{
        return todos.map(todo=>(
            <Todo 
              key={todo.id} 
              id={todo.id} 
              task={todo.task} 
              remove={remove} 
              update={update}
              completed={todo.completed}
              toggle={toggleCompletion} 
            />
        ) )
    }

    return (
        <div className='TodoList'>
                <h1>Todo List 
                    <span>Get things done, one item at a time.</span>
                </h1>
                <ul>{showTodos()}</ul>

                <NewTodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoList