import { createStore, combineReducers } from 'redux';
import { ColumnReducer, ItemsReducer, ModalReducer, TagReducer } from './Reducers';

const rootReducer = combineReducers({
	columns: ColumnReducer,
	items: ItemsReducer,
	modal: ModalReducer,
	tag: TagReducer,
});
/* eslint-disable  @typescript-eslint/no-explicit-any */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, composeEnhancers);

export type RootState = ReturnType<typeof store.getState>;
