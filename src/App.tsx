import { useState } from 'react';
import './App.scss';
import { LoginPage } from './components/LoginPage/LoginPage';

function App() {
	return (
		<div className='App'>
			<div>
				<LoginPage />
			</div>
		</div>
	);
}

export default App;
