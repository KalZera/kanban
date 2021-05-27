//onde será feita todas as regras e alteração de dados.
import { ItemsType } from 'store/Reducers/Items/TypesItems';

const ChangeItem = (items: ItemsType[], itemToChange: ItemsType, title: string, column: number, tag: number): ItemsType[] => {
	// refatorar depois
	const newItems = items.map(item => (item.id === itemToChange.id ? { ...item, idColumn: column, title, tag } : item));
	return newItems;
};

const DeleteItem = (items: ItemsType[], idItem: number): ItemsType[] => {
	const newItems = items.filter(item => item.id !== idItem);
	return newItems;
};

export const ItemsService = { ChangeItem, DeleteItem };
