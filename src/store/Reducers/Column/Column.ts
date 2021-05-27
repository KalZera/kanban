import { StateProps, Actions } from './TypesColumn';

const INITIAL_STATE: StateProps = {
	columns: [
		{ id: 1, type: 'default', title: 'To do', color: '#5CC4FF' },
		{ id: 2, type: 'default', title: 'In Progress', color: '#945AD1' },
		{ id: 3, type: 'default', title: 'Done', color: '#59D090' },
	],
	columnSelected: null,
};

export const ColumnReducer = (state: StateProps = INITIAL_STATE, action: Actions): StateProps => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return {
				...state,
				columns: [
					...state.columns,
					{
						id: parseInt(`${state.columns.length}${Math.floor(Math.random() * (1000 - 1) + 1)}`),
						title: action.payload,
						type: 'custom',
						color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
					},
				],
			};
		case 'SELECT_COLUMN':
			return {
				...state,
				columnSelected: action.payload,
			};
		default:
			return state;
	}
};
