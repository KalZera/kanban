import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface Props {
	options: { name: string; value: string | number }[];
	value: number | string;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export const Select: React.FC<Props> = ({ options, value, onChange }) => {
	return (
		<Container onChange={onChange} value={value}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</Container>
	);
};
