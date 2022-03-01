import * as actionTypes from "../constants/dets"
import axios from "axios";

const url = "https://localhost:8000";

export const deletePost = (_id) => async(dispatch) => {
    try {
        
        await axios.get(`${url}/delete/${_id}`);
        console.log("delete post");

        dispatch({
            type: actionTypes.DELETE_SUCCESS,
        })
    } catch (error) {
        console.log(error);
    }
};