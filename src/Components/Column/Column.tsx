import React from 'react';
import { Container, TitleColumn } from './styles';
import { Item } from './Components';
import { Button } from 'Components';
export const Column: React.FC = () => {
	return (
		<Container>
			<TitleColumn> To Do </TitleColumn>
			<Item />
			<Item />
			<Item />
			<Button />
		</Container>
	);
};
