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

type ActionAdd = { type: 'ADD_COLUMN'; payload: string };
type ActionSelect = { type: 'SELECT_COLUMN'; payload: number };
type ActionDelete = { type: 'DELETE_COLUMN'; payload: number };

export type Actions = ActionAdd | ActionSelect | ActionDelete;
