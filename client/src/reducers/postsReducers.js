import * as actionTypes from "../constants/post";

export const getPostsReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            return {
                loading: true,
                posts: []
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload 
            }
        case actionTypes.GET_POSTS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};

export const getPostDetsReducer = (state = {post: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_POST_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        case actionTypes.GET_POST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};