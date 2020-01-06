import { combineReducers } from "redux";
import quoteReducer from "./quotes/reducer";
export default combineReducers({ quoteState: quoteReducer });
