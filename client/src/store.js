import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { getPostsReducer, getPostDetsReducer, getDraftsReducer, detpostReducer } from './reducers/postsReducers';

const reducer = combineReducers({
    getPosts: getPostsReducer,
    getPostDets: getPostDetsReducer,
    getDrafts: getDraftsReducer,
    detpostReducer: detpostReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;