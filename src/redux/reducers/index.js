import ThemeReducer from "./ThemeReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ ThemeReducer, UserReducer });

export default rootReducer;
