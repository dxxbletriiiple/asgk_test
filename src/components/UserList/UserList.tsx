import { UserListItem } from '../UserListItem/UserListItem';
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
	return (
		<>
			<table className={styles['user-list']}>
				<thead>
					<tr>
						<td>
							<input type='radio' name='sort' id='id' />
							<label htmlFor='id'>id</label>
						</td>
						<td>
							<input type='radio' name='sort' id='name' />
							<label htmlFor='name'>Имя</label>
						</td>
						<td>
							<input type='radio' name='sort' id='lastname' />
							<label htmlFor='lastname'>Фамилия</label>
						</td>
						<td>
							<input type='radio' name='sort' id='middlename' />
							<label htmlFor='middlename'>Отчество</label>
						</td>
						<td>
							<input type='radio' name='sort' id='birthday' />
							<label htmlFor='birthday'>Дата рождения</label>
						</td>
						<td>
							<input type='radio' name='sort' id='email' />
							<label htmlFor='email'>Email</label>
						</td>
						<td>
							<input type='radio' name='sort' id='tel' />
							<label htmlFor='tel'>Тел</label>
						</td>
						<td>
							<input type='radio' name='sort' id='bonus' />
							<label htmlFor='bonus'>Бонусы</label>
						</td>
						<td>
							<input type='radio' name='sort' id='discount' />
							<label htmlFor='discount'>Скидка %</label>
						</td>
						<td>
							<input type='radio' name='sort' id='created' />
							<label htmlFor='created'>Дата создания</label>
						</td>
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
