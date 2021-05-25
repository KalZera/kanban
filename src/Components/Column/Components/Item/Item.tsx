import React, { FunctionComponent } from 'react';

import { Container, TitleItem, SectionTags } from './styles';
import { Tag } from 'Components';
import { ItemsType } from 'store/Reducers/Items';

interface Props {
	item: ItemsType;
}

export const Item: FunctionComponent<Props> = ({ item }) => {
	return (
		<Container>
			<TitleItem>{item.title}</TitleItem>
			<SectionTags>
				<Tag>Tag 1</Tag>
			</SectionTags>
		</Container>
	);
};
