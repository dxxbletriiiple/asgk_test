import { IUSer } from '../components/UserListItem/UserListItem.interface';
import { Order } from '../components/TestComponent/TestComponent.interface';
export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

export function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

export function createData(
	userId: number,
	name: string,
	lastName: string,
	middleName: string,
	birthday: string,
	email: string,
	phone: string,
	bonus: string,
	discount: string,
	createdAt: string,
): IUSer {
	return {
		userId,
		name,
		lastName,
		middleName,
		birthday,
		email,
		phone,
		bonus,
		discount,
		createdAt,
	};
}