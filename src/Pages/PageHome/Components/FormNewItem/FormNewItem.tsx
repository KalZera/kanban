import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnType } from 'store/Reducers';

import { Input, Select, Button } from 'Components';
import { useComponentDidMount } from 'Hooks';
import { RootState } from 'store';

interface Props {
	columns: ColumnType[];
}

export const FormNewItem: React.FC<Props> = ({ columns }) => {
	const { itemToChange, items } = useSelector((state: RootState) => state.items);
	const [item, setItem] = useState<string>('');
	const [column, setColumn] = useState<number>(0);
	const dispatch = useDispatch();
	useComponentDidMount(() => {
		if (itemToChange.id) {
			setItem(itemToChange.title);
			setColumn(itemToChange.idColumn);
		}
	});

	const AddItem = () => {
		if (itemToChange.id) {
			const newItems = items.filter(item => item.id !== itemToChange.id);
			const itemChange = [...newItems, { ...itemToChange, idColumn: column, title: item }];
			dispatch({ type: 'CHANGE_ITEM', payload: itemChange });
		} else {
			dispatch({ type: 'ADD_ITEM', payload: { idColumn: column, item } });
		}
	};
	// para formulários maiores eu geralmente uso o Formik
	const changeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		setColumn(parseInt(event.target.value));
	};
	// para formulários maiores eu geralmente uso o Formik
	const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setItem(event.target.value);
	};

	const options = columns.map(column => ({ name: column.title, value: column.id }));

	return (
		<>
			<div>Tarefa</div>
			<Input value={item} onChange={changeInput} />
			<Select options={options} onChange={changeSelect} value={column} />
			<Button onClick={AddItem} text="Adicionar Item" styleButton="button" />
		</>
	);
};
