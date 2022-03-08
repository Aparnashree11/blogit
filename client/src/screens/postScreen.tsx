import React from 'react';
import "../styles/blogs.css";

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deletePost, getPostDets} from '../actions/postsActions';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../components/navbar';

function PostScreen() {

  const dispatch = useDispatch();
  const history = useNavigate();

  const postDets = useSelector(state => state.getPostDets);
  const {loading, error, post} = postDets;

//import username
  const user="saqwed";
  
  const {_id}= useParams();

  useEffect(() =>{
    if(post && _id !== post._id) {
      dispatch(getPostDets(_id))
    }
  }, [dispatch, post, _id]);

  const handleDelete = (_id) => {
    if(window.confirm("Do you want to delete the post?")) {
      dispatch(deletePost(_id));
      history("/home");
    }
  }

  return (
    <div>
      <header>
        <Navbar />
        </header>
    <div className='blog__page'>
      {loading ? 
        <h2>Loading...</h2> 
        : error ? 
        <h2>{error}</h2>
        : (
          <div>
            <a className="back" href="/home"> ← back </a>
            <h1 className='blog__page__header'> {post.title} </h1>
            <p>Posted on {post.createdDate} by {post.username}</p>
            {post.username === user &&
            (
            <div>
            <button className="emojis" onClick={() => history(`/update/${post._id}`)}> update </button>
            <button className='emojis' onClick={() => handleDelete(post._id)}>delete</button>
            </div>
            )
            }
            <hr />
            <br />
            <div className='desc'>{post.description}</div>
          </div>
        ) }
      </div>

    </div>
  )
}

export default PostScreen;