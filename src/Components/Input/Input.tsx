import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface Props {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export const Input: React.FC<Props> = ({ value, onChange, placeholder }) => {
	return <Container value={value} type="text" onChange={onChange} placeholder={placeholder || ''} />;
};
