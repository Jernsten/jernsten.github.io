import { combineReducers } from "redux";

export default combineReducers({
  whoWhenWhere: (state = { who: "", when: "", where: "" }, action = { item: {} }) => {
    const { item } = action;
    const newState = { ...state, item };
    return newState;
  }
});
