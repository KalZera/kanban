type Type = 'default' | 'custom';
export interface ColumnType {
	id: number;
	title: string;
	type: Type;
	color?: string;
}

export interface StateProps {
	columns: ColumnType[];
}

const INITIAL_STATE: StateProps = {
	columns: [
		{ id: 0, type: 'default', title: 'To do', color: '#5CC4FF' },
		{ id: 1, type: 'default', title: 'In Progress', color: '#945AD1' },
		{ id: 2, type: 'default', title: 'Done', color: '#59D090' },
	],
};
type Action = { type: 'ADD_COLUMN'; payload: string };

export const ColumnReducer = (state: StateProps = INITIAL_STATE, action: Action): StateProps => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { id: state.columns.length, title: action.payload, type: 'custom' }] };
		default:
			return state;
	}
};
