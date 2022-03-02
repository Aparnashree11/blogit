import * as actionTypes from "../constants/post";
import axios from "axios";

const url = 'http://localhost:8000';

export const getPosts = () => async(dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POSTS_REQUEST});

        const { data } = await axios.get(`${url}/posts`);
        console.log("fetch posts")

        dispatch({
            type: actionTypes.GET_POSTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_FAILURE,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
};


export const getPostDets = (_id) => async(dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POST_REQUEST});

        const { data } = await axios.get(`${url}/post/${_id}`);
        console.log("fetch post");

        dispatch({
            type: actionTypes.GET_POST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POST_FAILURE,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
};

export const getDrafts = () => async(dispatch) => {
    try {
        dispatch({type: actionTypes.GET_DRAFTS_REQUEST});

        const { data } = await axios.get(`${url}/drafts`);
        console.log("fetch posts")

        dispatch({
            type: actionTypes.GET_DRAFTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_DRAFTS_FAILURE,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
};

export const getMyPosts = () => async(dispatch) => {
    try {
        dispatch({type: actionTypes.GET_MYPOSTS_REQUEST});

        const { data } = await axios.get(`${url}/myposts`);
        console.log("fetch posts")

        dispatch({
            type: actionTypes.GET_MYPOSTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_MYPOSTS_FAILURE,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
};

const postCreated = () => ({
    type: actionTypes.CREATE_POST,
});

export const CreatePost= (blog) => {
    return function (dispatch) {
        axios
        .post(`${url}/create`,blog)
        .then((res) => {
            console.log("resp",res);
            dispatch(postCreated());
            dispatch(getPosts());
        })
        .catch((error) => console.log(error));
    };
};

