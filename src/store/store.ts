import { createStore } from 'redux';
import { ColumnReducer } from './Reducers';

export const store = createStore(ColumnReducer);
