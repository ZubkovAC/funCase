import {combineReducers, createStore} from "redux";
import { orderReducer } from "./orderReducer";


const  rootReducer = combineReducers({
    order:orderReducer
})
export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>