import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span className="collection-item">{ todo.content }<span className="secondary-content" onClick={ () => {deleteTodo(todo.id)}}><i className="material-icons blue-text">delete</i></span></span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left, yay!</p>
    )
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}
export default Todos;