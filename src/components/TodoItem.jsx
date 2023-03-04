import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTitle } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const completeClick = () => {
		dispatch(
			toggleComplete({
				id: id,
				completed: !completed,
			})
		);
	};

	const deleteClick = () => {
		dispatch(
			deleteTodo({
				id: id,
			})
		);
	};

	// State variables for editTitle functionality
	const [showEdit, setShowEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const editClick = () => {
		setShowEdit(true);
	};

	const cancelClick = () => {
		setShowEdit(false);
		setNewTitle(title);
	};

	const submitClick = () => {
		dispatch(
			editTitle({
				id: id,
				title: newTitle,
			})
		);
		setShowEdit(false);
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				{showEdit ? (
					<span className='d-flex align-items-center'>
						<input type='text' className='form-control mr-3' value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
						<button className='btn btn-success mr-3' onClick={submitClick}>Submit</button>
						<button className='btn btn-secondary' onClick={cancelClick}>Cancel</button>
					</span>
				) : (
					<span className='d-flex align-items-center'>
						<input type='checkbox' className='mr-3' checked={completed} onChange={completeClick}></input>
						{title}
					</span>
				)}
				<div>
					<button className='btn btn-primary mr-3' onClick={editClick}>Edit</button>
					<button className='btn btn-danger' onClick={deleteClick}>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
