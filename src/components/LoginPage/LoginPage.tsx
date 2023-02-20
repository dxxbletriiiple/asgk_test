import { FormEvent, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import './LoginPage.scss';

type FormFields = {
	login: HTMLInputElement;
	password: HTMLInputElement;
};

export const LoginPage = (): JSX.Element => {
	const [token, setToken] = useState('');

	const apiData = new ApiService();
	const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
		e.preventDefault();
		const login: string = e.currentTarget.login.value;
		const password: string = e.currentTarget.password.value;

		if (login.trim() && password.trim()) {
			e.currentTarget.reset();
		}
		apiData.getAuthKey(login, password);
	};
	return (
		<>
			<form className='form' onSubmit={handleSubmit} autoComplete='off'>
				<input type='text' name='login' required placeholder='Login' />
				<input type='text' name='password' required placeholder='Password' />
				<button>Login</button>
			</form>
		</>
	);
};
