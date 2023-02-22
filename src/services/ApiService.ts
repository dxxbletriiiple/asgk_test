import { IUSer } from '../components/UserListItem/UserListItem.interface';

export class ApiService {
	_baseUrl: string = 'https://api.asgk-group.ru/';
	_authKey: string = '';
	_authToken: string = '';

	getAuthKey = async (login: string = 'asd', password: string = 'adsads') => {
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({ login, password }),
		};

		return fetch(`${this._baseUrl}test-auth-only`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				this._authKey = data?.auth_token;
				this.getAuthToken(this._authKey);
			});
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

		return fetch(`${this._baseUrl}v1/authorization`, params)
			.then((res) => res.json())
			.then((r) => {
				this._authToken = r.tokens[0].token;
				return true;
			})
			.catch((err: Error) => {
				console.error(err);
				return false;
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
		return arr;
	};

	_tarnsformCard = (card: any): IUSer => {
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
