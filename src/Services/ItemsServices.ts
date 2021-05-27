//onde será feita todas as regras e alteração de dados.
import { ItemsType } from 'store/Reducers';

const ChangeItem = (items: ItemsType[], itemToChange: ItemsType, item: string, column: number): ItemsType[] => {
	const newItems = items.filter(item => item.id !== itemToChange.id);
	const itemChange = [...newItems, { ...itemToChange, idColumn: column, title: item }];
	return itemChange;
};

export const ItemsService = { ChangeItem };
