import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'Components';

export const FormNewTag: React.FC = () => {
	const [tag, setTag] = useState<string>('');
	const dispatch = useDispatch();
	const AddTag = () => {
		dispatch({ type: 'ADD_TAG', payload: tag });
		dispatch({ type: 'TOGGLE_MODAL_TAG' });
	};
	return (
		<>
			<div>Tag</div>
			{/* informando como pode ser utilizado o onChange */}
			{/* para formulários maiores eu geralmente uso o Formik  */}
			<Input value={tag} onChange={e => setTag(e.target.value)} />
			<Button onClick={AddTag} text="Adicionar Coluna" styleButton="button" />
		</>
	);
};
