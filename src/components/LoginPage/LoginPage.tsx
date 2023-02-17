import { FormEvent, useState } from 'react';
import './LoginPage.scss';

type FormFields = {
	login: HTMLInputElement;
	password: HTMLInputElement;
};

export const LoginPage = (): JSX.Element => {
	const [token, setToken] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
		e.preventDefault();
		const login: string = e.currentTarget.login.value;
		const password: string = e.currentTarget.password.value;
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ login: login, password: password }),
		};

		fetch('https://api.asgk-group.ru/test-auth-only', requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// setToken(data);
				x(data.auth_token);
			});

		if (login.trim() && password.trim()) {
			e.currentTarget.reset();
		}

		function x(data: string) {
			const asd = {
				method: 'GET',
				'Content-Type': 'application/json',
				// prettier-ignore
				'Authorization': 'Основной ключ авторизации API',
			};

			// cards.asgk-group.ru/accounts/zxcpoi
			fetch(`https://api.asgk-group.ru/v1/${data}/passes/`)
				.then((res) => res.json())
				.then((r) => console.log(r))
				.catch((err: Error) => {
					console.log(err);
				});
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