import {Component} from 'react'
import NewTodoForm from './NewTodoForm'
import {v4 as uuid} from 'uuid'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component{
    state = {
        todos:[]
    }
    addTodo = (todo)=>{
        let newTodo = {...todo, id:uuid(), completed:false}
        let newTodos = [...this.state.todos, newTodo]
        this.setState({
            todos: newTodos
        })
    }
    showTodos(){
        return this.state.todos.map(todo=>(
            <Todo 
              key={todo.id} 
              id={todo.id} 
              task={todo.task} 
              delete={this.delete} 
              update={this.update}
              completed={todo.completed}
              toggleTodo={this.toggleCompletion} 
            />
        ) )
    }
    delete = (id)=>{
        let newTodos = this.state.todos.filter(t => t.id !== id)
        this.setState({
            todos: newTodos
        })
    }
    update = (id, updatedTask)=>{
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id===id){
                return {...todo, task: updatedTask}
            } 
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }
    toggleCompletion = (id)=>{
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id===id){
                return {...todo, completed: !todo.completed}
            } 
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }
    // componentDidUpdate(prevProps, prevState){
    //     console.log('IN COMPONENT DID UPDATE');
    //     console.log(prevState.todos);   // old state
    //     console.log(this.state.todos);  // current state
    // }
    componentWillUnmount(){
        console.log('IN COMPONENT WILL UNMOUNT!');
    }
    render(){
        return (
            <div className='TodoList'>
                <h1>Todo List!</h1>
                {this.showTodos()}
                
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }    
}

export default TodoList