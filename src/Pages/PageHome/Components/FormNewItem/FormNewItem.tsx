import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColumnType } from 'store/Reducers';

interface Props {
	columns: ColumnType[];
}

export const FormNewItem: React.FC<Props> = ({ columns }) => {
	const [item, setItem] = useState<string>('');
	const [column, setColumn] = useState<number>(0);
	const dispatch = useDispatch();
	const AddItem = () => {
		dispatch({ type: 'ADD_ITEM', payload: { idColumn: column, item } });
	};
	const changeSelect = (event: any) => {
		setColumn(parseInt(event.target.value));
	};
	return (
		<>
			<div>Novo Item</div>
			<input type="text" value={item} onChange={e => setItem(e.target.value)} />
			<select onChange={changeSelect}>
				{columns.map(column => (
					<option key={column.id} value={column.id}>
						{column.title}
					</option>
				))}
			</select>
			<button onClick={AddItem}>Adicionar Item</button>
		</>
	);
};
