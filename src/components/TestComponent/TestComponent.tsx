import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { stableSort, getComparator, createData } from '../../utils/uils';
import { IUSer } from 'components/UserListItem/UserListItem.interface';
import { EnhancedTableToolbarProps, EnhancedTableProps, HeadCell, Order } from './TestComponent.interface';
import { ApiService } from '../../services/ApiService';
import { cardsContext } from '../../context/context';

const rows = [
	createData(1, 'Cupcake', '305', '3.7', '10.01.1990', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(2, 'Cupcake', '3005', '3.7', '25.02.1990', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(3, 'Cupcake', '305', '3.7', '65.01.1990', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(4, 'Cupcake', '305', '3.7', '98.01.1990', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(5, 'Cupcake', '305', '3.7', '987', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(5, 'Cupcake', '305', '3.7', '987', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(5, 'Cupcake', '305', '3.7', '987', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(5, 'Cupcake', '305', '3.7', '987', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
	createData(5, 'Cupcake', '305', '3.7', '987', '4.3', 'asd', 'dic', 'asdas', 'asdasd'),
];

const headCells: readonly HeadCell[] = [
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

function EnhancedTableHead(props: EnhancedTableProps) {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = (property: keyof IUSer) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component='span' sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const { numSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
					{numSelected} selected
				</Typography>
			) : (
				<Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
					Nutrition
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title='Filter list'>
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

const api = new ApiService();

export function EnhancedTable() {
	const cards = React.useContext(cardsContext);
	const [rows, setRows] = React.useState([]);
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof IUSer>('name');
	const [selected, setSelected] = React.useState<readonly string[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	console.log(cards);

	React.useEffect(() => {
		api.getCards().then(setRows);
	}, []);

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IUSer) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			if (rows[0]) {
				const newSelected = rows.map((n: any) => n.name);
				setSelected(newSelected);
				return;
			}
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.name)}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name}
											selected={isItemSelected}
										>
											<TableCell padding='checkbox'>
												<Checkbox
													color='primary'
													checked={isItemSelected}
													inputProps={{
														'aria-labelledby': labelId,
													}}
												/>
											</TableCell>
											<TableCell component='th' id={labelId} scope='row' padding='none'>
												{row.userId}
											</TableCell>
											<TableCell align='right'>{row.name}</TableCell>
											<TableCell align='right'>{row.lastName}</TableCell>
											<TableCell align='right'>{row.middleName}</TableCell>
											<TableCell align='right'>{row.birthday}</TableCell>
											<TableCell align='right'>{row.email}</TableCell>
											<TableCell align='right'>{row.phone}</TableCell>
											<TableCell align='right'>{row.bonus}</TableCell>
											<TableCell align='right'>{row.discount}</TableCell>
											<TableCell align='right'>{row.createdAt}</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label='Dense padding' />
		</Box>
	);
}
