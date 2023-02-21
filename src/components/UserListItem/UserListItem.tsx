import { FC } from 'react';
import { IUSer } from './UserListItem.interface';
import styles from './UserListItem.module.scss';

export const UserListItem: FC<{ user: IUSer }> = ({ user }): JSX.Element => {
	const { userId, name, middleName, lastName, birthday, email, phone, bonus, discount, createdAt } = user;
	return (
		<li className={styles['list-item']}>
			<span>{userId}</span>
			<span>{name}</span>
			<span>{lastName}</span>
			<span>{middleName}</span>
			<span>{birthday}</span>
			<span>{email}</span>
			<span>{phone}</span>
			<span>{bonus}</span>
			<span>{discount}</span>
			<span>{createdAt}</span>
		</li>
	);
};
