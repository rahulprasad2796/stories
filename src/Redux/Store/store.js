//store different type of reducers and linking to one, this is the main store
//basically stores different reducers, after this the updates are called in from this to the components

import { combineReducers, createStore } from "redux";
import productReducer from "../Reducers/productreducer.js";
import addReducer from "../Reducers/reducers.js"
//to use this store edit index.js with provider and store

const rootReducer = combineReducers(
    {addReducer,productReducer}
)
const store = createStore(rootReducer);

export default store;