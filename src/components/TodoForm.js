import React from 'react'

class ToDoForm extends React.Component{

    constructor(){
        super();
        this.state = {
            item:''
        }
    }

    handleChanges = event => {
        this.setState({
            item: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state.item)
        this.setState({
            item:''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="input"
                    value={this.state.item}
                    onChange={this.handleChanges}/>

                <button>Add Item</button>

            </form>
        )
    }
}

export default ToDoForm