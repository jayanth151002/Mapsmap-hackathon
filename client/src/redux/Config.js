import { createStore } from "redux";
import { Reducer } from "./reducer";
export const ConfigStore = () => {
  const store = createStore(Reducer);
  return store;
};
