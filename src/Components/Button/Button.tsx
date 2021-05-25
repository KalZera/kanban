import React from 'react';

import { Container } from './styles';

type styleType = 'button' | 'link';

interface Props {
	onClick: () => void;
	text: string;
	icon?: JSX.Element;
	styleButton?: styleType;
}

export const Button: React.FC<Props> = ({ onClick, icon, text, styleButton }) => {
	return (
		<Container onClick={onClick} typestyle={styleButton || 'link'}>
			{!!icon && icon} {text}
		</Container>
	);
};
