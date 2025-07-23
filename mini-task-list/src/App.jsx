import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
	const image = '../src/images/free-code-camp.jpg';
	return (
		<div className='app-task'>
			<div className='freecodecamp-logo-box'>
				<img src={image} className='freecodecamp-logo' />
			</div>
			<div className='main-task-list'>
				<h1>Tasks</h1>
				<TaskList />
			</div>
		</div>
	);
};

export default App;
