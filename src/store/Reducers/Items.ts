type statusType = 'todo' | 'progress' | 'done';
export interface ItemsType {
	id: number;
	title: string;
	status?: statusType;
}

export interface ItemProps {
	items: ItemsType[];
}

const INITIAL_STATE: ItemProps = {
	items: [],
};
type ActionItem = { type: 'ADD_ITEM'; payload: string };

export const ItemsReducer = (state: ItemProps = INITIAL_STATE, action: ActionItem) => {
	switch (action.type) {
		// case 'ADD_ITEM':
		// 	return { ...state, columns: [...state.columns, { id: state.columns.length, title: action.payload }] };
		default:
			return state;
	}
};
