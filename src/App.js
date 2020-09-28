import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      items:[]
    }
  }

  toggleChecked = (clickedId) => {
    this.setState({

      items: this.state.items.map(item => {
        if(item.id === clickedId){
          return{
            ...item,
            completed: !item.completed
          }
        }else{
          return item
        }
      })
    }
    )
  }

  addItem = itemName => {
    const newItem = {
      name:itemName,
      id: new Date(),
      completed:false
    }

    this.setState({
      items:[...this.state.items,newItem]
    })
  }

  clearCompleted = (event) => {
    event.preventDefault()
    this.setState({
      items:this.state.items.filter(item => {
        if(item.completed === false){
          return item
        }
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          items={this.state.items}
          toggleChecked={this.toggleChecked}
          clearCompleted={this.clearCompleted}
        />

        <TodoForm 
        addItem={this.addItem}/>

      </div>
    );
  }
}

export default App;
