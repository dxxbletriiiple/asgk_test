import { FormEvent, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { ApiService } from '../../services/ApiService';
import { FormFields, IPushForm } from './PushFrom.interface';
import styles from './PushFrom.module.scss';

const modalEl = document.querySelector('#modal');

export const PushForm = ({ marker, isOpen, onClose }: IPushForm): JSX.Element | null => {
	const el = useMemo(() => {
		const element = document.createElement('div');
		return element;
	}, [marker]);

	useEffect(() => {
		modalEl?.appendChild(el);

		return () => {
			modalEl?.removeChild(el);
		};
	}, []);
	if (isOpen) return createPortal(<View />, el);
	return null;
};
const api = new ApiService();

const View = () => {
	const keyAndToken = useSelector((state: any) => state.keyAndToken);

	const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>): void => {
		e.preventDefault();
		const ids: string = e.currentTarget.ids.value;
		const msg: string = e.currentTarget.msg.value;

		if (ids.trim() && msg.trim()) {
			api.pushMessage(keyAndToken.key, keyAndToken.token, ids, msg)
				.then()
				.catch((err) => {
					console.error(err);
				});
			e.currentTarget.reset();
		}
	};

	return (
		<form className={styles['push-form']} onSubmit={handleSubmit}>
			<label htmlFor='ids' className={styles.label}>
				Введите id клиентов через запятую
				<input type='text' name='ids' id='ids' placeholder='17145,15897,15970' className={styles.input} />
			</label>
			<label htmlFor='msg' className={styles.label}>
				Введите текст сообщения
				<input type='text' name='msg' id='msg' placeholder='Текст сообщения' className={styles.input} />
			</label>
			<button>Отправить</button>
		</form>
	);
};
