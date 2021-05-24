import React from 'react';

interface Props {
	onClick: () => void;
}

export const Button: React.FC<Props> = ({ onClick }) => {
	return <button onClick={onClick}>Adicionar outro Cartão</button>;
};
