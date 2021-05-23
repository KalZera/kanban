import { title } from 'process';

const INITIAL_STATE: any = {
	columns: [
		{ title: 'To do', color: 'blue' },
		{ title: 'In Progress', color: 'green' },
		{ title: 'Done', color: 'gray' },
	],
};

export const Column = (state = INITIAL_STATE, action: { type: string; payload: any }) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { title: action.payload.title }] };
		default:
			return INITIAL_STATE;
	}
};
