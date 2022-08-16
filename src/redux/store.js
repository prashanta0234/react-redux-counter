import { createStore } from "redux";
import reduceCounter from "./counter/counterReducer";

export const Store = createStore(reduceCounter);
// export default store;
