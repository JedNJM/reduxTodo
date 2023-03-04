import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

const TodoList = () => {
    // Use Selector goes in the Store and Retrieves the entire states which are the data in the store through the state value so we specify todos by state.todos to get the todos array
    const todos = useSelector((state)=>state.todos);
    return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;