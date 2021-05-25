import React from 'react';

import { Container } from './styles';

interface Props {
	onClick: () => void;
	text: string;
	icon?: JSX.Element;
}

export const Button: React.FC<Props> = ({ onClick, icon, text }) => {
	return (
		<Container onClick={onClick}>
			{!!icon && icon} {text}
		</Container>
	);
};
