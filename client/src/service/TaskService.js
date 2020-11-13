import http from '../http-common';

const getAllTasks = () => http.get('/api/task');

const createTask = task => http.post('/api/task', task);

const updateTask = id => http.put(`/api/task/${id}`);

const undoTask = id => http.put(`/api/undoTask/${id}`);

const deleteTask = id => http.delete(`/api/deleteTask/${id}`);

const deleteAllTasks = () => http.delete('/api/deleteAllTasks');

const TaskService = {
	getAllTasks,
	createTask,
	updateTask,
	undoTask,
	deleteTask,
	deleteAllTasks
};

export default TaskService;
