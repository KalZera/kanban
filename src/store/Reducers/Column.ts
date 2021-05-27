type Type = 'default' | 'custom';
export interface ColumnType {
	id: number;
	title: string;
	type: Type;
	color?: string;
}

export interface StateProps {
	columns: ColumnType[];
	columnSelected: number | null;
}

const INITIAL_STATE: StateProps = {
	columns: [
		{ id: 1, type: 'default', title: 'To do', color: '#5CC4FF' },
		{ id: 2, type: 'default', title: 'In Progress', color: '#945AD1' },
		{ id: 3, type: 'default', title: 'Done', color: '#59D090' },
	],
	columnSelected: null,
};
type ActionAdd = { type: 'ADD_COLUMN'; payload: string };
type ActionSelect = { type: 'SELECT_COLUMN'; payload: number };

type Actions = ActionAdd | ActionSelect;

export const ColumnReducer = (state: StateProps = INITIAL_STATE, action: Actions): StateProps => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return {
				...state,
				columns: [
					...state.columns,
					{ id: parseInt(`${state.columns.length}${Math.floor(Math.random() * (1000 - 1) + 1)}`), title: action.payload, type: 'custom' },
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
