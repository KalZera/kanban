import React, { FunctionComponent } from 'react';
import { Container, TitleColumn } from './styles';
import { Item } from './Components';
import { Button } from 'Components';

interface Item {
	nameItem: string;
	tags?: string[];
}

interface Props {
	Column: { id: number; title: string; items: Item[] };
}

export const Column: FunctionComponent<Props> = ({ Column }) => {
	return (
		<Container>
			<TitleColumn> {Column.title} </TitleColumn>
			{Column.items.map(item => (
				<Item key={item.nameItem} item={item} />
			))}
			<Button />
		</Container>
	);
};
