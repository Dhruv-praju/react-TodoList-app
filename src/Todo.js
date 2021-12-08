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
    // componentDidUpdate(prevProps, prevState){
    //     console.log('IN TODO COMP DID UPDATE');
    //     console.log(prevProps.task);   // old state
    //     console.log(this.props.task);  // current state
    // }
    render(){
        return (
            <li className='Todo'>
                {this.state.editing
                ? 
                <div>
                    <form className='Todo-EditForm' onSubmit={this.handleSubmit}>
                        <input name='task' value={this.state.task} onChange={this.handleChange}/>
                        <button>Update</button>
                    </form>
                </div>
                : 
                <div className='Todo-div'>
                    <p className={this.props.completed ? 'Todo-task completed' :'Todo-task'} onClick={this.handleToggle}>{this.props.task}</p>
                    <div className='Todo-buttons'>
                        <button><i class="fas fa-pen" onClick={this.handleEdit}></i></button>
                        <button><i class="fas fa-trash" onClick={this.handleDelete}></i></button>
                    </div>
                </div>
                }
            </li>
        )
    }    
}

export default Todo