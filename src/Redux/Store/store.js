import { createStore } from "redux";
import reducers from "../Reducers/reducers"
//to use this store edit index.js with provider and store
const store = createStore(reducers);

export default store;