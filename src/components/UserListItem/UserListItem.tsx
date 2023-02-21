import { FC } from 'react';
import { IUSer } from './UserListItem.interface';
import styles from './UserListItem.module.scss';

export const UserListItem: FC<{ user: IUSer }> = ({ user }): JSX.Element => {
	const { userId, name, middleName, lastName, birthday, email, phone, bonus, discount, createdAt } = user;
	return (
		<tr className={styles['list-item']}>
			<td>{userId}</td>
			<td>{name}</td>
			<td>{lastName}</td>
			<td>{middleName}</td>
			<td>{birthday}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>{bonus}</td>
			<td>{discount}</td>
			<td>{createdAt}</td>
		</tr>
	);
};
