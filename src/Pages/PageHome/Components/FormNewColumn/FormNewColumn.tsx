import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'Components';

export const FormNewColumn: React.FC = () => {
	const [column, setColumn] = useState<string>('');
	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'ADD_COLUMN', payload: column });
		dispatch({ type: 'TOGGLE_MODAL_COLUMN' });
	};
	return (
		<>
			<div>Coluna</div>
			{/* informando como pode ser utilizado o onChange */}
			{/* para formulários maiores eu geralmente uso o Formik  */}
			<Input value={column} onChange={e => setColumn(e.target.value)} />
			<Button onClick={AddColumn} text="Adicionar Coluna" styleButton="button" />
		</>
	);
};
