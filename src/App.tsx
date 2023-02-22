import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Portal from '@mui/base/Portal';
import { Login } from './components/Login/Login';
import { LoginPage } from './pages/LoginPage';
import { EnhancedTable } from './components/Table/Table';
import { PushForm } from './components/PushForm/PushFrom';
import { store } from './store/store';
import './App.scss';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='App'>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/login' element={<Login />} />
						<Route path='/cards' element={<EnhancedTable />} />
					</Routes>
				</Router>
				<button onClick={() => setIsOpen(true)}>открыть модалку</button>

				<PushForm marker='some_mark' isOpen={isOpen} onClose={() => setIsOpen(false)} />
			</Provider>
		</div>
	);
}

export default App;
