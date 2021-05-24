import React from 'react';
import { useDispatch } from 'react-redux';

export const FormNewColumn: React.FC = () => {
	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'ADD_COLUMN', payload: 'Nova coluna' });
	};
	return (
		<>
			<div>Nova Coluna</div>
			<input type="text" />
			<button onClick={AddColumn}>Adicionar Coluna</button>
		</>
	);
};
