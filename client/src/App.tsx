import './App.css';
import {Routes, Route} from 'react-router-dom';

import HomeScreen from "./screens/homeScreen";
import CreateNewPost from './screens/createPost';
import MyPosts from "./screens/myPosts";
import Drafts from './screens/drafts';
import PostScreen from "./screens/postScreen";
import UpdatePosts from './screens/updatePost';
import Login from './screens/login';

import React, { useState } from 'react'

function App() {
  const [logged, updateLogged] = useState(false);

  return (      
  <div>
      <Routes>
        <Route path="/" element={<Login updateLogged={updateLogged}/>}/>
        <Route path="/home" element={<HomeScreen/>}/> 
        <Route path="/create" element={<CreateNewPost/>}/>
        <Route path="/myposts" element={<MyPosts/> } />
        <Route path="/drafts" element={<Drafts/>} />
        <Route path="/home/post/:_id" element={<PostScreen/>} />
        <Route path="/drafts/post/:_id" element={<PostScreen/>} />
        <Route path="/myposts/post/:_id" element={<PostScreen/>} />
        <Route path="/update/:_id" element={<UpdatePosts/>} />
      </Routes>
  </div>
  )
}

export default App