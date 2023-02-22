import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './components/Login/Login';
import { LoginPage } from './pages/LoginPage';
import { EnhancedTable } from './components/Table/Table';
import { store } from './store/store';
import './App.scss';

function App() {
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
			</Provider>
		</div>
	);
}

export default App;
