import { UserListItem } from '../UserListItem/UserListItem';
import { IThData } from './UserList.interface';
import styles from './UserList.module.scss';

export const UserList = (): JSX.Element => {
	const x = {
		birthday: '01.01.1990',
		bonus: '100',
		createdAt: '16.01.2023',
		discount: '0.1',
		email: 'o@outlook.com',
		lastName: 'Некрасов',
		middleName: 'Агафонович',
		name: 'Севастьян',
		phone: '79303709018',
		userId: 953237,
	};
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
					<UserListItem user={x} />
					<UserListItem user={x} />
					<UserListItem user={x} />
					<UserListItem user={x} />
					<UserListItem user={x} />
				</tbody>
			</table>
		</>
	);
};

const InputEl = ({ name, text }: IThData): JSX.Element => {
	return (
		<td>
			<input type='radio' name='sort' id={name} />
			<label htmlFor={name}>{text}</label>
		</td>
	);
};
