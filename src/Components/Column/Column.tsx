import React, { FunctionComponent } from 'react';
import { Container, TitleColumn } from './styles';
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
		<Container>
			<TitleColumn> {column.title} </TitleColumn>
			{items.map(item => item.idColumn === column.id && <Item key={item.id} item={item} />)}
			<Button onClick={AddItem} />
		</Container>
	);
};
