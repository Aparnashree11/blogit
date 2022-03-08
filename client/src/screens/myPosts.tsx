import React from 'react'
import "../styles/blogs.css";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostDiv from "../components/postdiv";

import { getMyPosts as ListPosts } from '../actions/postsActions';

import Navbar from '../components/navbar';

function MyPosts() {
  
  const dispatch = useDispatch();

  const getMyPosts = useSelector(state => state.getMyPosts);

  const {posts, loading, error} = getMyPosts;

  //import username
  const user="saqwed";

  useEffect (() => {
    dispatch(ListPosts())
  }, [dispatch]);


  
  return (
      <div>
      <header>
        <Navbar />
        </header>
    
    <div className='blog__page'>
      <h1 className='blog__page__header'> My Posts</h1>

      <div>
          {loading ? <h2>Loading...</h2> 
            : error ? <h2>{error}</h2> 
            : posts.map(post => ( 
            post.username === user ?
            (<PostDiv 
              key={post._id} 
              _id={post._id}
              title={post.title}
              description={post.description}
              createdDate={post.createdDate}
              username={post.username}
              imageURL={post.imageURL}
              />)
              : null
          )
          ) 
          }
        </div>
    </div>
    </div>
  )
}

export default MyPosts;
