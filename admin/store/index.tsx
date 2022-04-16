import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";


const rootReducers = combineReducers({
    AuthReducer,
    // UserReducer,
    // CategoryReducer,
    // ProductReducer,
    // PostReducer,
    // CouponReducer,
    // BannerReducer,
    // OrderReducer,
});

export type AppState = ReturnType<typeof rootReducers>

const middlewares = [thunkMiddleware];
export const Store = createStore(rootReducers, composeWithDevTools( applyMiddleware(...middlewares)));

const makestore = ()=>Store;
export const wrapper = createWrapper(makestore);