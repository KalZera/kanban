import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input } from 'Components';

export const FormNewColumn: React.FC = () => {
	const [column, setColumn] = useState<string>('');
	const dispatch = useDispatch();
	const AddColumn = () => {
		dispatch({ type: 'ADD_COLUMN', payload: column });
	};
	return (
		<>
			<div>Nova Coluna</div>
			{/* informando como pode ser utilizado o onChange */}
			<Input value={column} onChange={e => setColumn(e.target.value)} />
			<button onClick={AddColumn}>Adicionar Coluna</button>
		</>
	);
};
