import '../styles/blogs.css'
import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostDiv from "../components/postdiv";

import { getDrafts as ListPosts } from '../actions/postsActions';

import Navbar from '../components/navbar';

const MyDrafts = ({user}) => {
  
  const dispatch = useDispatch();

  const getDrafts = useSelector(state => state.getDrafts);

  const {posts, loading, error} = getDrafts;

  //import username
  // const user = "aparna";

  useEffect (() => {
    dispatch(ListPosts())
  }, [dispatch]);

  return (
      <div className='blog__page'>
        <h1 className='blog__page__header'>Drafts</h1>

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
    );
}

export default MyDrafts;
