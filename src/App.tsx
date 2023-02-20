import { useState } from 'react';
import { context } from './context/context';
import './App.scss';
import { LoginPage } from './components/LoginPage/LoginPage';

const { Provider } = context;
function App() {
	const [state, setState] = useState({});
	return (
		<div className='App'>
			<Provider value={(state, setState)}>
				<LoginPage />
			</Provider>
		</div>
	);
}

export default App;
