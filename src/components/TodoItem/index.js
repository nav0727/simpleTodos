import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo} = props
  const {id, title} = todoList

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo-container">
      <div className="bg-container">
        <p className="todo-title">{title}</p>
        <button className="delete-button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
