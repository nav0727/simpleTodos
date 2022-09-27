/* eslint-disable no-unused-vars */
import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDeleteTodo = id => {
    const {todoList} = this.state
    const filteredTodo = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredTodo})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bgc">
        <div className="bg">
          <div className="container">
            <h1>Simple Todos</h1>
            <ul className="todo-container">
              {todoList.map(each => (
                <TodoItem
                  key={each.id}
                  onDeleteTodo={this.onDeleteTodo}
                  todoList={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
