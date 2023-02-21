import { IUSer } from '../UserListItem/UserListItem.interface';

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
