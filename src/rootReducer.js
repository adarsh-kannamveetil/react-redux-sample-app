import { combineReducers } from "redux";
import home from "./components/home/reducer";

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
