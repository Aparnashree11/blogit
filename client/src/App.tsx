import React from 'react'
import {Routes, Route} from 'react-router-dom';

import './styles/navbar.css';
import './App.css';

import HomeScreen from "./screens/homeScreen";
import CreateNewPost from './screens/createPost';
import MyPosts from "./screens/myPosts";
import Drafts from './screens/drafts';
import PostScreen from "./screens/postScreen";
import UpdatePosts from './screens/updatePost';

import '@aws-amplify/ui-react/styles.css';

import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(config);

function App({signOut, user}) {
  return (  
      <div>
        <div>
            <header className="Navbar">
                <div className="Toolbar">
                    <div className="Logo">
                        {" "}
                        <span role="img" aria-label="logo">
                        🗯️
                        </span>
                        {" "}
                    </div>
                    <div className="Title"> 
                        <a className="titleName" href="/"> BlOG it! </a>  
                    </div>
                    <div>
                        <a className="myButton" href="/create">Create Post</a>
                    </div>
                    <div>
                        <a className="myButton" href="/myposts">My Posts</a>
                    </div>
                    <div>
                        <a className="myButton" href="/drafts">Drafts</a>
                    </div>
                    <div>
                        <button className="myButton" onClick={signOut}>Sign out</button>
                    </div>
                </div>
            </header>
        </div>
    <div>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/> 
          <Route path="/create" element={<CreateNewPost user={user.attributes.name}/>}/>
          <Route path="/myposts" element={<MyPosts user={user.attributes.name}/> } />
          <Route path="/drafts" element={<Drafts user={user.attributes.name}/>} />
          <Route path="/post/:_id" element={<PostScreen user={user.attributes.name}/>} />
          <Route path="/drafts/post/:_id" element={<PostScreen user={user.attributes.name}/>} />
          <Route path="/myposts/post/:_id" element={<PostScreen user={user.attributes.name}/>} />
          <Route path="/update/:_id" element={<UpdatePosts user={user.attributes.name}/>} />
        </Routes>
    </div>
  </div> 
  )
}

export default withAuthenticator(App)