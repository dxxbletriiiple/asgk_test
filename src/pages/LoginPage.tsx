import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
	return (
		<>
			<Link to='/login' className={styles['login-link']}>
				Login
			</Link>
		</>
	);
};
