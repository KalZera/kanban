import React from 'react';
import { Content } from 'Styles';
import { FiPlus } from 'react-icons/fi';

import { Title, ColumnGroups, ButtonAddColumn, ButtonAddTag } from './styles';
import { Column, Button, Modal } from 'Components';
import { FormNewColumn, FormNewItem, FormNewTag } from './Components';

import { useSelector, useDispatch } from 'react-redux';
import { ColumnType } from 'store/Reducers';
import { RootState } from 'store';

export const PageHome: React.FC = () => {
	const { columns } = useSelector((state: RootState) => state.columns);
	const { modal } = useSelector((state: RootState) => state.modal);
	const { items } = useSelector((state: RootState) => state.items);
	const { tags } = useSelector((state: RootState) => state.tag);
	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'TOGGLE_MODAL_COLUMN' });
	};
	const AddTag = () => {
		dispatch({ type: 'TOGGLE_MODAL_TAG' });
	};
	const ChoseForm = (): JSX.Element => {
		switch (modal.form) {
			case 'column':
				return <FormNewColumn />;
			case 'tag':
				return <FormNewTag />;
			case 'item':
			default:
				return <FormNewItem columns={columns} tags={tags} />;
		}
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
				<ChoseForm />
			</Modal>
		</Content>
	);
};
