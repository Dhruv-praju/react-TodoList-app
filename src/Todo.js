import {Component} from 'react'
import './Todo.css'

class Todo extends Component{
    state = {
        editing: false,
        task: this.props.task
    }
    handleDelete=()=>{
        this.props.delete(this.props.id)
    }
    handleEdit=()=>{
        this.setState({
            editing: true
        })
    }
    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt)=>{
        evt.preventDefault()
        this.props.update(this.props.id, this.state.task)
        this.setState({
            editing:false
        })
    }
    handleToggle = (evt)=>{
        this.props.toggleTodo(this.props.id)
    }
    render(){
        return (
            <div className='Todo'>
                {this.state.editing
                ? 
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name='task' value={this.state.task} onChange={this.handleChange}/>
                        <button>Update</button>
                    </form>
                </div>
                : 
                <div>
                    <span className={this.props.completed ? 'completed' :''} onClick={this.handleToggle}>{this.props.task}      </span>
                    <button onClick={this.handleDelete}>delete</button>
                    <button onClick={this.handleEdit}>edit</button>
                </div>
                }
            </div>
        )
    }    
}

export default Todo