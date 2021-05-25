import React, { FunctionComponent } from 'react';
import { Container, TitleColumn } from './styles';
import { FiPlus } from 'react-icons/fi';

import { Item } from './Components';
import { Button } from 'Components';
import { ColumnType, ItemsType } from 'store/Reducers';

import { useDispatch } from 'react-redux';

interface Props {
	column: ColumnType;
	items: ItemsType[];
}

export const Column: FunctionComponent<Props> = ({ column, items }) => {
	const dispatch = useDispatch();
	const AddItem = () => {
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};

	return (
		<Container color={column.color || 'blue'}>
			<TitleColumn> {column.title} </TitleColumn>
			{items.map(item => item.idColumn === column.id && <Item key={item.id} item={item} />)}
			<Button icon={<FiPlus />} onClick={AddItem} text="Adicionar outro Cartão" />
		</Container>
	);
};
