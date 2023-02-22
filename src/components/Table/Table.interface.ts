export interface IUSer {
	birthday: string;
	bonus: string;
	createdAt: string;
	discount: string;
	email: string;
	lastName: string;
	middleName: string;
	name: string;
	phone: string;
	userId: number;
}

export interface EnhancedTableToolbarProps {
	numSelected: number;
}

export interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IUSer) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

export interface HeadCell {
	disablePadding: boolean;
	id: keyof IUSer;
	label: string;
	numeric: boolean;
}

export type Order = 'asc' | 'desc';

export const headCells: readonly HeadCell[] = [
	{
		id: 'userId',
		numeric: false,
		disablePadding: true,
		label: 'id',
	},
	{
		id: 'name',
		numeric: true,
		disablePadding: false,
		label: 'Имя',
	},
	{
		id: 'lastName',
		numeric: true,
		disablePadding: false,
		label: 'Фамилия',
	},
	{
		id: 'middleName',
		numeric: true,
		disablePadding: false,
		label: 'Отчество',
	},
	{
		id: 'birthday',
		numeric: true,
		disablePadding: false,
		label: 'Дата рождения',
	},
	{
		id: 'email',
		numeric: true,
		disablePadding: false,
		label: 'Email',
	},
	{
		id: 'phone',
		numeric: true,
		disablePadding: false,
		label: 'Тел',
	},
	{
		id: 'bonus',
		numeric: true,
		disablePadding: false,
		label: 'Бонусы',
	},
	{
		id: 'discount',
		numeric: true,
		disablePadding: false,
		label: 'Скидка %',
	},
	{
		id: 'createdAt',
		numeric: true,
		disablePadding: false,
		label: 'Дата создания',
	},
];
