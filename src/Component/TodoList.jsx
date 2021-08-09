import React from 'react'

const TodoList = ({ todos, setTodos ,setEditTodo}) => {

    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id ){
                    return {...item,complete: !item.complete}
                }
                return item;
            })
        )
    }

    const habdkeEdit = ({id}) => {
        const findTodo = todos.find((todo) => 
            todo.id === id
        );
        setEditTodo(findTodo);
    }


    const handleDelete = ({ id }) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
           {todos.map((todo) => (
            <li className="list-item" key="{todo.id}">
                <input type="text" 
                value={todo.title} 
                className={`list ${todo.complete ? "complete" : ""}`}
                onChange={(event)=> event.defaultPrevented()}
                />
                <div>
                    <button className="button-complete " onClick ={() => handleComplete(todo)}>
                        <i className="fa fa-check-circle"> </i>
                    </button>
                    <button className="button-edit" onClick = {() => habdkeEdit(todo)}>
                        <i className="fa fa-edit"> </i>
                    </button>
                    <button className="button-delete " onClick={() => handleDelete(todo)}>
                        <i className="fa fa-trash"> </i>
                    </button>
                </div>
            </li>
           )

           )}
        </div>
    )
}

export default TodoList
