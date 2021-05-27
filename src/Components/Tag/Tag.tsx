import React from 'react';

import { Container } from './styles';

interface Props {
	textTag: string;
}

export const Tag: React.FC<Props> = ({ textTag }) => {
	return <Container>{textTag}</Container>;
};
