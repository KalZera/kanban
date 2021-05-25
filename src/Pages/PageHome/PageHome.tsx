import React from 'react';
import { Content } from 'Styles';
import { FiPlus } from 'react-icons/fi';

import { Title, ColumnGroups, ButtonAddColumn } from './styles';
import { Column, Button, Modal } from 'Components';
import { FormNewColumn, FormNewItem } from './Components';

import { useSelector, useDispatch } from 'react-redux';
import { ColumnType } from 'store/Reducers';
import { RootState } from 'store';

export const PageHome: React.FC = () => {
	const { columns } = useSelector((state: RootState) => state.columns);
	const { modal } = useSelector((state: RootState) => state.modal);
	const { items } = useSelector((state: RootState) => state.items);
	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'TOGGLE_MODAL_COLUMN' });
	};
	const ChoseForm = (): JSX.Element => {
		switch (modal.form) {
			case 'column':
				return <FormNewColumn />;
			case 'item':
			default:
				return <FormNewItem columns={columns} />;
		}
	};

	return (
		<Content>
			<Title>Page Home</Title>
			<ColumnGroups>
				{columns.map((column: ColumnType) => (
					<Column key={column.title} column={column} items={items} />
				))}
				<ButtonAddColumn>
					<Button icon={<FiPlus />} onClick={AddColumn} text="Adicionar outra coluna" />
				</ButtonAddColumn>
			</ColumnGroups>
			<Modal open={modal.open} handleClose={AddColumn} title="Adicionar">
				<ChoseForm />
			</Modal>
		</Content>
	);
};
