import { IListItem } from 'src/types/IListItem';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const addItem = actionCreator<IListItem>('ADD_ITEM');
export const removeItem = actionCreator<IListItem[]>('REMOVE_ITEM');