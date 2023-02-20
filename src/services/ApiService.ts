export class ApiService {
	_baseUrl = 'https://api.asgk-group.ru/';

	getAuthKey = async (login: string, password: string) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ login: login, password: password }),
		};

		fetch(`${this._baseUrl}test-auth-only`, requestOptions)
			.then((response) => response.json())
			.then((data) => this.getAuthToken(data?.auth_token));
	};

	getAuthToken = async (data: string) => {
		const params = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// prettier-ignore
				'Authorization': data,
			},
		};

		fetch(`${this._baseUrl}v1/authorization`, params)
			.then((res) => res.json())
			.then((r) => {
				this.getCards(data, r.tokens[0].token);
			})
			.catch((err: Error) => {
				console.error(err);
			});
	};

	getCards = async (key: string, token: string) => {
		const params = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// prettier-ignore
				'Authorization': key,
			},
		};
		fetch(`${this._baseUrl}/v1/${token}/passes`, params)
			.then((r) => r.json())
			.then(console.log);
	};
}
