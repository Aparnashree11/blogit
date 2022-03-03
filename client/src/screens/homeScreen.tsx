import '../styles/blogs.css'
import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostDiv from "../components/postdiv";

import { getPosts as ListPosts } from '../actions/postsActions';

const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const getPosts = useSelector(state => state.getPosts);

  const {posts, loading, error} = getPosts;

  useEffect (() => {
    dispatch(ListPosts())
  }, [dispatch]);

  return (
      <div className='blog__page'>
        <h1 className='blog__page__header'>Latest Posts</h1>

        <div>
          {loading ? <h2>Loading...</h2> 
            : error ? <h2>{error}</h2> 
            : posts.map(post => (
            <PostDiv 
              key={post._id} 
              _id={post._id}
              title={post.title}
              description={post.description}
              createdDate={post.createdDate}
              username={post.username}
              />
          )
          ) 
          }
        </div>
      </div>
    );
}

export default HomeScreen;
