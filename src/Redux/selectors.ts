import { IWhoWhenWhereState } from "./reducer";

export const whoWhenWhereSelector = (state: { whoWhenWhere: { item: IWhoWhenWhereState } }) => state.whoWhenWhere.item;
