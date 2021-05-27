import React from 'react';
import { FormNewColumn } from '../FormNewColumn';
import { FormNewItem } from '../FormNewItem';
import { FormNewTag } from '../FormNewTag';

interface Props {
	form: string;
}

export const Form: React.FC<Props> = ({ form }) => {
	switch (form) {
		case 'column':
			return <FormNewColumn />;
		case 'tag':
			return <FormNewTag />;
		case 'item':
		default:
			return <FormNewItem />;
	}
};
