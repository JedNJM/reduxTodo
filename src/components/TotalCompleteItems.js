import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
	const completedTodo = useSelector((state)=> state.todos.filter((done)=> done.completed === true))
	return <h4 className='mt-3'>Completed: {completedTodo.length} hello</h4>;
};

export default TotalCompleteItems;