import TaskForm from './TaskForm';
import '../styles/TaskList.css';
import { useState } from 'react';
import Task from './Task';

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTasks = [task, ...tasks];
			setTasks(updatedTasks);
		}
	};
	const deleteTask = (id) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};
	const completeTask = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<div>
			<TaskForm onSubmit={addTask} />
			<div className='task-list-box'>
				{tasks.map((task) => (
					<Task
						id={task.id}
						key={task.id}
						text={task.text}
						completed={task.completed}
						deleteTask={deleteTask}
						completeTask={completeTask}
					/>
				))}
			</div>
		</div>
	);
};

export default TaskList;
