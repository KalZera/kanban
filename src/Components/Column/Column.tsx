import React, { FunctionComponent } from 'react';
import { Container, TitleColumn, DeleteButton, SectionTitle } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';

import { Button, Item } from 'Components';
import { ColumnType } from 'store/Reducers/Column/TypesColumn';
import { ItemsType } from 'store/Reducers/Items/TypesItems';

import { useDispatch } from 'react-redux';

interface Props {
	column: ColumnType;
	items: ItemsType[];
}

export const Column: FunctionComponent<Props> = ({ column, items }) => {
	const dispatch = useDispatch();
	const AddItem = () => {
		dispatch({ type: 'CLEAR_ITEM' });
		dispatch({ type: 'SELECT_COLUMN', payload: column.id });
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};

	const deleteColumn = () => {
		dispatch({ type: 'DELETE_COLUMN', payload: column.id });
	};

	return (
		<Container color={column.color || 'blue'}>
			<SectionTitle>
				<TitleColumn> {column.title} </TitleColumn>
				{column.type === 'custom' && (
					<DeleteButton onClick={deleteColumn}>
						<FiX />
					</DeleteButton>
				)}
			</SectionTitle>
			{items.map(item => item.idColumn === column.id && <Item key={item.id} item={item} />)}
			<Button icon={<FiPlus />} onClick={AddItem} text="Adicionar outro Cartão" />
		</Container>
	);
};
