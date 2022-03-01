import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';

import HomeScreen from "./screens/homeScreen";
import CreatePost from './screens/createPost';
import MyPosts from "./screens/myPosts";
import Drafts from './screens/drafts';
import PostScreen from "./screens/postScreen";

import NavBar from './components/navbar';

export class App extends Component {
  render() {
    return (
      <div>
    <header>
      <NavBar />
    </header>
    <div>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/> 
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/myposts" element={<MyPosts/> } />
          <Route path="/drafts" element={<Drafts/>} />
          <Route path="/post/:_id" element={<PostScreen/>} />
        </Routes>
    </div>
    </div>
    )
  }
}

export default App