import { combineReducers } from "redux";
import dragonListReducer from "./dragonListReducer";

export const rootReducer = combinedReducers({
    dragonList: dragonListReducer,
    title: titleReducers, 
})