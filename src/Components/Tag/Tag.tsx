import React from 'react';

import { Container } from './styles';

interface Props {
	textTag: string;
	colorTag: string;
}

export const Tag: React.FC<Props> = ({ textTag, colorTag }) => {
	return <Container colorTag={colorTag}>{textTag}</Container>;
};
