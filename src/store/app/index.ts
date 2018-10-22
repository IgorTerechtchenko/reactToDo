import { createStore } from "redux";
import { reducer } from "./reducer";
import { IState } from "./types"

const state: IState = {
    itemList: []
}; 

export const store = createStore(reducer, state);
const rootReducer = combineReducers({
  movieInfo: movieReducer,
  todoList: listReducer
});

export const store: Store<IStore> = createStore(
  rootReducer,
    // tslint"disable-next-line:no-string-literal
    window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
  )
);