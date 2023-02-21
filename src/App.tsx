import { useState } from 'react';
import { context, IContext } from './context/context';
import './App.scss';
import { LoginPage } from './components/LoginPage/LoginPage';
import { UserList } from './components/UserList/UserList';

const { Provider } = context;
function App() {
	/*const [state, setState] = useState<IContext>({});
	 const onCHangeState = (st: any) => {
		setState(st);
	}; */

	return (
		<div className='App'>
			{/* <Provider value={(state, onCHangeState)}> */}
			<LoginPage />
			{/* </Provider> */}
			<UserList />
		</div>
	);
}

export default App;
