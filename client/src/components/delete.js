import React from 'react';
import {useDispatch, useEffect, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { deletePost } from '../actions/detsActions';

function DeletePost() {

    const dispatch = useDispatch();
    const {_id}= useParams();

    const postDets = useSelector(state => state.getPostDets);
    const {post} = postDets;

    useEffect(() =>{
        if(post && _id !== post._id) {
          dispatch(deletePost(_id))
        }
      }, [dispatch, post, _id]);

  return (
    <div>delete</div>
  )
}

export default DeletePost