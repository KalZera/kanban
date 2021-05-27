import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { Container, TitleItem, SectionTags } from './styles';
import { Tag } from 'Components';
import { ItemsType } from 'store/Reducers/Items';

interface Props {
	item: ItemsType;
}

export const Item: FunctionComponent<Props> = ({ item }) => {
	const dispatch = useDispatch();
	const changeItem = () => {
		dispatch({ type: 'SELECT_ITEM', payload: item });
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};
	return (
		<Container onClick={changeItem}>
			<TitleItem>{item.title}</TitleItem>
			<SectionTags>
				<Tag>Tag 1</Tag>
			</SectionTags>
		</Container>
	);
};
