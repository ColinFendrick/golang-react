import { useState, useEffect } from 'react';

import { Card, Header, Form, Input, Button } from 'semantic-ui-react';

import TaskService from '../service/TaskService';
import { Tasks } from '.';

const ToDoList = () => {
	const [state, setState] = useState({
		task: '',
		items: []
	});

	useEffect(() => getTask(), []);

	const onChange = ({ target }) => setState({ ...state, task: target.value });

	const onSubmit = async () => {
		if (state.task) {
			try {
				await TaskService.createTask({ task: state.task });
				getTask();
				setState({ ...state, task: '' });
			} catch (e) {
				console.log(e);
			}
		}
	};

	const getTask = async () => {
		try {
			const res = await TaskService.getAllTasks();
			if (res.data) {
				setState({ ...state, items: res.data });
			} else {
				setState({ ...state, items: []});
			}
		} catch (e) {
			console.log(e);
		}
	};

	const updateTask = async id => {
		try {
			await TaskService.updateTask(id);
			getTask();
		} catch (e) {
			console.log(e);
		}
	};

	const undoTask = async id => {
		try {
			await TaskService.undoTask(id);
			getTask();
		} catch (e) {
			console.log(e);
		}
	};

	const deleteTask = async id => {
		try {
			await TaskService.deleteTask(id);
			getTask();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<div className='row'>
				<Header className='header' as='h2'>
          TO DO LIST
				</Header>
			</div>
			<div className='row'>
				<Form onSubmit={onSubmit}>
					<Input
						type='text'
						name='task'
						onChange={onChange}
						value={state.task}
						fluid
						placeholder='Create Task'
					/>
					<Button>Create Task</Button>
				</Form>
			</div>
			<div className='row'>
				<Card.Group>
					<Tasks
						items={state.items}
						updateTask={updateTask}
						undoTask={undoTask}
						deleteTask={deleteTask}
					/>
				</Card.Group>
			</div>
		</div>
	);
};

export default ToDoList;
