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
		<ul className={styles['user-list']}>
			<li>
				<span>id</span>
				<span>Имя</span>
				<span>Фамилия</span>
				<span>Отчество</span>
				<span>Дата рождения</span>
				<span>Email</span>
				<span>Тел</span>
				<span>Бонусы</span>
				<span>Скидка %</span>
				<span>Дата создания</span>
			</li>
			<UserListItem user={x} />
		</ul>
	);
};
