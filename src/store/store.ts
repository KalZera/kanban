import { createStore, combineReducers } from 'redux';
import { ColumnReducer, ItemsReducer, ModalReducer, TagReducer } from './Reducers';

const rootReducer = combineReducers({
	columns: ColumnReducer,
	items: ItemsReducer,
	modal: ModalReducer,
	tag: TagReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
