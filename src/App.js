import styles from './App.module.css';
import { Tabs } from './components/Tabs';
import taskData from './taskData';

function App() {
	return (
		<div className={`${styles.container} bg-light text-dark`}>
			<div className={`container-lg py-3 `}>
				<div className={`d-flex align-items-center justify-content-between gap-3`}>
					<h1>Arief Rachmawan</h1>
					<span>Weekly task 1</span>
				</div>

				{/* Tabs */}
				<Tabs data={taskData} />
			</div>
		</div>
	);
}

export default App;
