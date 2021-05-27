import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ColumnType } from 'store/Reducers/Column/TypesColumn';
// import { TagType } from 'store/Reducers';

import { Input, Select, Button } from 'Components';
import { useComponentDidMount } from 'Hooks';
import { RootState } from 'store';
import { ItemsService } from 'Services';

export const FormNewItem: FunctionComponent = () => {
	const { itemToChange, items } = useSelector((state: RootState) => state.items);
	const { columns, columnSelected } = useSelector((state: RootState) => state.columns);
	const { tags } = useSelector((state: RootState) => state.tag);
	const [item, setItem] = useState<string>('');
	const [column, setColumn] = useState<number>(columnSelected || 1);
	const [tag, setTag] = useState<number>(1);
	const dispatch = useDispatch();
	useComponentDidMount(() => {
		if (itemToChange.id) {
			setItem(itemToChange.title);
			setColumn(itemToChange.idColumn);
			setTag(itemToChange.tag);
		}
	});

	const AddItem = () => {
		if (itemToChange.id) {
			const newItems = ItemsService.ChangeItem(items, itemToChange, item, column, tag);
			dispatch({ type: 'CHANGE_ITEM', payload: newItems });
		} else {
			dispatch({ type: 'ADD_ITEM', payload: { idColumn: column, item, tag } });
		}
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};

	const DeleteItem = () => {
		const newItems = ItemsService.DeleteItem(items, itemToChange.id);
		dispatch({ type: 'DELETE_ITEM', payload: newItems });
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};
	// para formulários maiores eu geralmente uso o Formik
	const changeSelectColumn = (event: ChangeEvent<HTMLSelectElement>) => {
		setColumn(parseInt(event.target.value));
	};

	// para formulários maiores eu geralmente uso o Formik
	const changeSelectTag = (event: ChangeEvent<HTMLSelectElement>) => {
		setTag(parseInt(event.target.value));
	};

	// para formulários maiores eu geralmente uso o Formik
	const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setItem(event.target.value);
	};

	const optionsColumns = columns.map(column => ({ name: column.title, value: column.id }));
	const optionsTags = tags.map(tag => ({ name: tag.title, value: tag.id }));
	return (
		<>
			<div>Tarefa</div>
			<Input value={item} onChange={changeInput} />
			<Select options={optionsColumns} onChange={changeSelectColumn} value={column} />
			<Select options={optionsTags} onChange={changeSelectTag} value={tag} />
			<Button onClick={AddItem} text="Adicionar Item" styleButton="button" />
			{itemToChange.id && <Button onClick={DeleteItem} text="Apagar Item" styleButton="button" />}
		</>
	);
};
