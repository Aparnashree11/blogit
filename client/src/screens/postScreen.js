import React from 'react';
import "../styles/blogs.css";

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getPostDets} from '../actions/postsActions';
import { Link, useParams } from 'react-router-dom';

function PostScreen() {

  const dispatch = useDispatch();

  const postDets = useSelector(state => state.getPostDets);
  const {loading, error, post} = postDets;

  const {_id}= useParams();

  useEffect(() =>{
    if(post && _id !== post._id) {
      dispatch(getPostDets(_id))
    }
  }, [dispatch, post, _id]);

  return (
    <div className='blog__page'>
      {loading ? 
        <h2>Loading...</h2> 
        : error ? 
        <h2>{error}</h2>
        : (
          <>
            <h1 className='blog__page__header'> {post.title} </h1>
            <p className="ext">Posted on {post.createdDate} by {post.username}</p>
            <span className='desc'>{post.description}</span>
            <button>Update</button>
            <Link to={`delete/${_id}`} className="myButton">
              Delete
            </Link>
          </>
        ) }
      

    </div>
  )
}

export default PostScreen;