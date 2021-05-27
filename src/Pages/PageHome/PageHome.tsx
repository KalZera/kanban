import React from 'react';
import { Content } from 'Styles';
import { FiPlus } from 'react-icons/fi';

import { Title, ColumnGroups, ButtonAddTag } from './styles';
import { Column, Button, Modal } from 'Components';
import { Form } from './Components';

import { useSelector, useDispatch } from 'react-redux';
import { ColumnType } from 'store/Reducers/Column/TypesColumn';
import { RootState } from 'store';

export const PageHome: React.FC = () => {
	const { columns } = useSelector((state: RootState) => state.columns);
	const { modal } = useSelector((state: RootState) => state.modal);
	const { items } = useSelector((state: RootState) => state.items);

	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'TOGGLE_MODAL_COLUMN' });
	};
	const AddTag = () => {
		dispatch({ type: 'TOGGLE_MODAL_TAG' });
	};

	return (
		<Content>
			<Title>Page Home</Title>
			<ButtonAddTag>
				<Button icon={<FiPlus />} onClick={AddColumn} text="Adicionar outra coluna" styleButton="button" />
				<Button icon={<FiPlus />} onClick={AddTag} text="Criar nova tag" styleButton="button" />
			</ButtonAddTag>
			<ColumnGroups>
				{columns.map((column: ColumnType) => (
					<Column key={column.title} column={column} items={items} />
				))}
			</ColumnGroups>
			<Modal open={modal.open} handleClose={AddColumn} title="Adicionar">
				<Form form={modal.form} />
			</Modal>
		</Content>
	);
};
