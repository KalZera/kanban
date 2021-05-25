import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface Props {
	options: { name: string; value: string | number }[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export const Select: React.FC<Props> = ({ options, onChange }) => {
	return (
		<Container onChange={onChange}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</Container>
	);
};
