//onde será feita todas as regras e alteração de dados.
import { ItemsType } from 'store/Reducers';

const ChangeItem = (items: ItemsType[], itemToChange: ItemsType, title: string, column: number, tag: number): ItemsType[] => {
	// refatorar depois
	const newItems = items.map(item => (item.id === itemToChange.id ? { ...item, idColumn: column, title, tag } : item));
	return newItems;
};

export const ItemsService = { ChangeItem };
