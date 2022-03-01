import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { getPostsReducer, getPostDetsReducer } from './reducers/postsReducers';
import { deletePost } from './actions/detsActions';

const reducer = combineReducers({
    getPosts: getPostsReducer,
    getPostDets: getPostDetsReducer,
    deletePost: deletePost,
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;