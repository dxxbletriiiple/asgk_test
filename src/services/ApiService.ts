import { IUSer } from '../components/Table/Table.interface';

export class ApiService {
	_baseUrl: string = 'https://api.asgk-group.ru/';
	_key = '';
	_token = '';

	getKeyAndToken = async (login: string, password: string) => {
		this._key = await this.getAuthKey(login, password);
		this._token = await this.getAuthToken(this._key);
		return { key: this._key, token: this._token };
	};

	getAuthKey = async (login: string = 'asd', password: string = 'adsads') => {
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify({ login, password }),
		};

		return fetch(`${this._baseUrl}test-auth-only`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				return data?.auth_token;
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
				return r.tokens[0].token;
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
		return arr;
	};

	pushMessage = async (key: string, token: string, ids: string, msg: string) => {
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				//prettier-ignore
				'Authorization': key,
			},
			body: JSON.stringify({
				user_ids: ids,
				date_start: new Date().toString(),
				push_message: msg,
			}),
		};
		fetch(`${this._baseUrl}v1/${token}/message/push`, params)
			.then((r) => r.json())
			.then((r) => console.log(r.code, r))
			.catch((e) => console.error(e));
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
