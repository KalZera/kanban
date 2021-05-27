export interface ItemsType {
	id: number;
	title: string;
	idColumn: number;
	tag: number;
}

export interface ItemProps {
	items: ItemsType[];
	itemToChange: ItemsType;
}

const INITIAL_STATE: ItemProps = {
	items: [],
	itemToChange: {} as ItemsType,
};

interface payloadType {
	idColumn: number;
	tag: number;
	item: string;
}

type ActionChange = { type: 'CHANGE_ITEM'; payload: ItemsType[] };
type ActionSelectItem = { type: 'SELECT_ITEM'; payload: ItemsType };
type ActionAdd = { type: 'ADD_ITEM'; payload: payloadType };
type ActionClear = { type: 'CLEAR_ITEM' };
type ActionDelete = { type: 'DELETE_ITEM'; payload: ItemsType[] };

type ActionItem = ActionChange | ActionAdd | ActionSelectItem | ActionClear | ActionDelete;

export const ItemsReducer = (state: ItemProps = INITIAL_STATE, action: ActionItem): ItemProps => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [
					...state.items,
					{
						id: parseInt(`${state.items.length}${Math.floor(Math.random() * (1000 - 1) + 1)}`),
						title: action.payload.item,
						idColumn: action.payload.idColumn,
						tag: action.payload.tag,
					},
				],
			};
		case 'SELECT_ITEM':
			return {
				...state,
				itemToChange: action.payload,
			};
		case 'CLEAR_ITEM':
			return {
				...state,
				itemToChange: {} as ItemsType,
			};
		case 'CHANGE_ITEM':
			return {
				...state,
				items: action.payload,
			};
		case 'DELETE_ITEM':
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
};
