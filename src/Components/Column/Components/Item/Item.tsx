import React, { FunctionComponent } from 'react';

import { Container, TitleItem, SectionTags } from './styles';
import { Tag } from 'Components';

interface Item {
	nameItem: string;
	tags?: string[];
}
interface Props {
	item: Item;
}

export const Item: FunctionComponent<Props> = ({ item }) => {
	return (
		<Container>
			<TitleItem>{item.nameItem}</TitleItem>
			<SectionTags>
				<Tag>Tag 1</Tag>
			</SectionTags>
		</Container>
	);
};
