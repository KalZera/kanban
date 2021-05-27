import { TagProps, Action } from './TypesTags';

const INITIAL_STATE: TagProps = {
	tags: [
		{ id: 1, title: 'Prioridade Baixa' },
		{ id: 2, title: 'Prioridade Média' },
		{ id: 3, title: 'Prioridade Alta' },
	],
};

export const TagReducer = (state: TagProps = INITIAL_STATE, action: Action): TagProps => {
	switch (action.type) {
		case 'ADD_TAG':
			return {
				...state,
				tags: [...state.tags, { id: parseInt(`${state.tags.length}${Math.floor(Math.random() * (1000 - 1) + 1)}`), title: action.payload }],
			};
		default:
			return state;
	}
};
