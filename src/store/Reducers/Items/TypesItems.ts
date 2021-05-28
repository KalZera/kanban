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

export type ActionItem = ActionChange | ActionAdd | ActionSelectItem | ActionClear | ActionDelete;
