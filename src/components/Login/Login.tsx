import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../../services/ApiService';
import './Login.scss';

const apiData = new ApiService();

type FormFields = {
	login: HTMLInputElement;
	password: HTMLInputElement;
};

export const Login = (): JSX.Element => {
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
		e.preventDefault();
		const login: string = e.currentTarget.login.value;
		const password: string = e.currentTarget.password.value;

		if (login.trim() && password.trim()) {
			apiData
				.getAuthKey(login, password)
				.then(() => navigate('/cards'))
				.catch((err) => {
					console.error(err);
				});
			e.currentTarget.reset();
		}
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
