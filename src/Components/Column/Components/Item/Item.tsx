import React from 'react';

import { Container, TitleItem } from './styles';
import { Tag } from 'Components';

export const Item: React.FC = () => {
	return (
		<Container>
			<TitleItem>Documentar Padrões mobile</TitleItem>
			<Tag>Tag 1</Tag>
		</Container>
	);
};
