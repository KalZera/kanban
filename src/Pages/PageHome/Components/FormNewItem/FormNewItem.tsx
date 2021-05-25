import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const FormNewItem: React.FC = () => {
	const [item, setItem] = useState<string>('');
	// const [column, setColumn] = useState<string>('');
	const dispatch = useDispatch();
	const AddItem = () => {
		dispatch({ type: 'ADD_ITEM', payload: item });
	};
	return (
		<>
			<div>Novo Item</div>
			<input type="text" value={item} onChange={e => setItem(e.target.value)} />
			<button onClick={AddItem}>Adicionar Item</button>
		</>
	);
};
