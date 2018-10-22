import { reducerWithInitialState } from "typescript-fsa-reducers";
import { IListItem } from 'src/types/IListItem';
import { addItem, removeItem } from "./actions";
import { IState } from "./types";

export const reducer = reducerWithInitialState<IState>({ itemList: [] })
  .case(addItem, addItemHandler)
  .case(removeItem, removeItemHandler);

function addItemHandler(state: IState, newValue: IListItem): IState {
  const tmpItemList = state.itemList.concat([ newValue ])
  console.log(state.itemList)
  return { 
    ...state,
    itemList: tmpItemList, 
  };
}

function removeItemHandler(state: IState): IState {
  console.log(addItem.type);
  return state;
}
