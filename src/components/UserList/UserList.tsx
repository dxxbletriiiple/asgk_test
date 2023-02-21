import { useState, useEffect } from 'react';
import { IUSer } from 'components/UserListItem/UserListItem.interface';
import { IThData } from './UserList.interface';
import { UserListItem } from '../UserListItem/UserListItem';
import styles from './UserList.module.scss';

export const UserList = (): JSX.Element => {
	const [data, setData] = useState<IUSer>();

	useEffect(() => {}, []);

	/* 	const handleSort = () => {
		setdata((prev) => {
			console.log(data.sort((a, b) => a.userId - b.userId));
			return data.sort((a, b) => a.userId - b.userId);
		});
	}; */
	const thData: IThData[] = [
		{
			name: 'id',
			text: 'id',
		},
		{
			name: 'name',
			text: 'Имя',
		},
		{
			name: 'lastname',
			text: 'Фамилия',
		},
		{
			name: 'middlename',
			text: 'Отчество',
		},
		{
			name: 'birthday',
			text: 'Дата рождения',
		},
		{
			name: 'email',
			text: 'Email',
		},
		{
			name: 'tel',
			text: 'Тел',
		},
		{
			name: 'bonus',
			text: 'Бонусы',
		},
		{
			name: 'discount',
			text: 'Скидка %',
		},
		{
			name: 'created',
			text: 'Дата создания',
		},
	];
	const InputEl = (data: IThData): JSX.Element => {
		return (
			<td>
				<input
					type='radio'
					name='sort'
					id={data.name}
					// onChange={(e: React.FormEvent<HTMLInputElement>) => void}
				/>
				<label htmlFor={data.name}>{data.text}</label>
			</td>
		);
	};

	return (
		<>
			<table className={styles['user-list']}>
				<thead>
					<tr>
						{thData.map((i) => (
							<InputEl {...i} key={i.name} />
						))}
					</tr>
				</thead>
				<tbody>
					{/* <UserListItem user={x[0]} />
					<UserListItem user={x[1]} /> */}
				</tbody>
			</table>
		</>
	);
};
