import { IUSer } from '../components/UserListItem/UserListItem.interface';
import { createContext } from 'react';

export interface IContext {
	cards: IUSer[];
	onChangeState?: (arg: any) => void;
}

export const cardsContext = createContext<IContext>({
	cards: [],
	onChangeState: (arg: any) => {},
});
