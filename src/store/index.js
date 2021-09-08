import {createStore, combineReducers} from "redux"
import ProductsReducer from "./reducers/ProductsReducer"
import CartReducer from "./reducers/CartReducer"
import { devToolsEnhancer } from 'redux-devtools-extension';
import userReducer from './reducers/useSlice';

const root = combineReducers({
    ProductsReducer,
    CartReducer,
    userReducer
});
const store = createStore(root, devToolsEnhancer());
export default store;