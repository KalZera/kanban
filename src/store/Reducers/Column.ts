type Type = 'default' | 'custom';
export interface ColumnType {
	id: number;
	title: string;
	color?: string;
	type?: Type;
}

export interface StateProps {
	columns: ColumnType[];
}

const INITIAL_STATE: StateProps = {
	columns: [
		{ id: 0, title: 'To do', color: 'blue' },
		{ id: 1, title: 'In Progress', color: 'green' },
		{ id: 2, title: 'Done', color: 'gray' },
	],
};
type Action = { type: 'ADD_COLUMN'; payload: string };

export const ColumnReducer = (state: StateProps = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { id: state.columns.length, title: action.payload }] };
		default:
			return state;
	}
};
