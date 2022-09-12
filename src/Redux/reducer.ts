import { combineReducers } from "redux";

const emptyS = {
  whoWhenWhere: { who: "", when: "", where: "" }
};
const emptyA = { type: "", item: {} };

export interface IWhoWhenWhereState {
  who: string;
  when: string;
  where: string;
}

export default combineReducers({
  whoWhenWhere: (state: IWhoWhenWhereState = emptyS.whoWhenWhere, action = emptyA) => {
    const { item } = action;
    return { ...state, item };
  }
});
