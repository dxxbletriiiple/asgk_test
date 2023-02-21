import { createContext } from 'react';

export interface IContext {
	isLogged: boolean;
	authKey: string;
	authToken: string;
	cards: any[];
	setCards: (arg: any) => void;
}

export const context = createContext<IContext>({
	isLogged: false,
	authKey: '',
	authToken: '',
	cards: [],
	setCards: () => void {},
});
