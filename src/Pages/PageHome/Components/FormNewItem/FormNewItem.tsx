import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColumnType } from 'store/Reducers';

import { Input, Select, Button } from 'Components';

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

	const changeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setColumn(parseInt(event.target.value));
	};

	const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setItem(event.target.value);
	};

	const options = columns.map(column => ({ name: column.title, value: column.id }));

	return (
		<>
			<div>Novo Item</div>
			<Input value={item} onChange={changeInput} />
			<Select options={options} onChange={changeSelect} />
			<Button onClick={AddItem} text="Adicionar Item" styleButton="button" />
		</>
	);
};
