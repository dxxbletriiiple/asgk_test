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
		const res = await fetch(`${this._baseUrl}/v1/${token}/passes`, params).then((r) => r.json());

		const arr = await res.passes.map(this._tarnsformCard);
		console.log(arr[0]);
	};

	_tarnsformCard = (card: any) => {
		return {
			userId: card.user_id,
			name: card.first_name,
			lastName: card.last_name,
			middleName: card.pat_name,
			birthday: card.birthday,
			email: card.email,
			phone: card.phone,
			bonus: card.bonus,
			discount: card.discount,
			createdAt: new Intl.DateTimeFormat('ru-RU').format(new Date(card.created_at)),
		};
	};
}
