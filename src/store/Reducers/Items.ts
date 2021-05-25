export interface ItemsType {
	id: number;
	title: string;
	idColumn: number;
	tag: string;
}

export interface ItemProps {
	items: ItemsType[];
}

const INITIAL_STATE: ItemProps = {
	items: [
		{ id: 0, title: 'Documentar Padrões mobile', idColumn: 0, tag: 'tag 2' },
		{ id: 1, title: 'Ajustes fluxo de compra', idColumn: 0, tag: 'tag 1' },
		{ id: 2, title: 'Banners da home', idColumn: 0, tag: 'tag 3' },
		{ id: 3, title: 'Template de e-mail marketing', idColumn: 0, tag: '123' },
		{ id: 4, title: 'Wireframe das telas', idColumn: 1, tag: '123' },
		{ id: 5, title: 'Implementação do blog', idColumn: 2, tag: '123' },
		{ id: 6, title: 'Análise de métricas', idColumn: 2, tag: '123' },
		{ id: 7, title: 'Ux Review', idColumn: 2, tag: '123' },
	],
};

interface payloadType {
	idColumn: number;
	item: string;
}

type ActionItem = { type: 'ADD_ITEM'; payload: payloadType };

export const ItemsReducer = (state: ItemProps = INITIAL_STATE, action: ActionItem): ItemProps => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [...state.items, { id: state.items.length, title: action.payload.item, idColumn: action.payload.idColumn, tag: 'Padrão' }],
			};
		default:
			return state;
	}
};
