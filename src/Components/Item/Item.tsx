import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, TitleItem, SectionTags } from './styles';
import { Tag } from 'Components';
import { ItemsType } from 'store/Reducers/Items/TypesItems';
import { TagType } from 'store/Reducers/Tags/TypesTags';
import { RootState } from 'store';

interface Props {
	item: ItemsType;
}

export const Item: FunctionComponent<Props> = ({ item }) => {
	const dispatch = useDispatch();
	const { tags } = useSelector((state: RootState) => state.tag);
	const changeItem = () => {
		dispatch({ type: 'SELECT_ITEM', payload: item });
		dispatch({ type: 'TOGGLE_MODAL_ITEM' });
	};

	return (
		<Container onClick={changeItem}>
			<TitleItem>{item.title}</TitleItem>
			<SectionTags>{tags.map((tag: TagType) => tag.id === item.tag && <Tag key={tag.id} textTag={tag.title} />)}</SectionTags>
		</Container>
	);
};
