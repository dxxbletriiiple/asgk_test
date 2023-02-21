import { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { LoginPage } from './pages/LoginPage';
import { UserList } from './components/UserList/UserList';
import { cardsContext, IContext } from './context/context';
import { EnhancedTable } from './components/TestComponent/TestComponent';
import './App.scss';

const { Provider } = cardsContext;

function App() {
	const [cards, setCards] = useState([]);

	const onChangeState = (st: any) => {
		setCards(st);
	};

	return (
		<div className='App'>
			<Provider value={{ cards, onChangeState }}>
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
