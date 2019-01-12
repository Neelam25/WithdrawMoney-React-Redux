import { createStore } from "redux";
import reducer from "../reducer";
const initialState = {
  username: "Jasmine",
  totalAmount: 2500701
};
export const store = createStore(reducer, initialState);
