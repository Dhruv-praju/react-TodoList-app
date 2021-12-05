import {Component} from 'react'
import './NewTodoForm.css'

class NewTodoForm extends Component{
    state = {
        task:''
    }
    handleChange = (evt)=>{
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit = (evt)=>{
        evt.preventDefault()
        // console.log(this.state);
        this.props.addTodo(this.state)
        this.setState({
            task:''
        })
    }
    render(){
        return (
            <div className='NewTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='task' onChange={this.handleChange} value={this.state.task}/>
                    <button>make</button>
                </form>
            </div>
        )
    }    
}

export default NewTodoForm