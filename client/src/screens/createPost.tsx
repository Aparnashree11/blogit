import "../styles/forms.css";

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {CreatePost} from "../actions/postsActions";
import {useNavigate} from "react-router-dom";

import Navbar from "../components/navbar";


function CreateNewPost({user}) {

  let dispatch = useDispatch();

  let history = useNavigate();

  const current= new Date();

  const [state, setState] = useState({
    "title": "",
    "description": "",
    "isDraft": "false",
    "createdDate": current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate(),
    //import username
    "username" : user,
    "imageURL": "",
  });

  const {title, description, isDraft, createdDate, username, imageURL} = state;

  const [error, setError] = useState("");

  const handleInputChange= (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit=(e) => {
     e.preventDefault();
     if(!title || !description || !imageURL) {
       setError("Input all the fields!");
     }
     else {
        dispatch(CreatePost(state));
        history("/home");
        setError("");
        console.log(state);
     }

  };

  return (
    <div>
  <form className="form-style-7" onSubmit={handleSubmit}>
    <a className="back" href="/home"> ← back </a>
    <h5>Create Post</h5>
    { error && <h3>{error}</h3> }
  <ul>
  <li>
  <label>Title</label>
  <input type="text" value={title} name="title"
          onChange={handleInputChange} />
  <span>Enter title</span>
  </li>
  <li>
  <label>Image URL</label>
  <input type="text" value={imageURL} name="imageURL"
          onChange={handleInputChange} />
  <span>Enter image URL</span>
  </li>
   <li>
  <label>Description</label>
  <textarea type="text" value={description} name="description"
          onChange={handleInputChange}> </textarea>
  <span>Enter content</span>
  </li>
  <li>
  <button type="submit" value="true" name="isDraft" onClick={handleInputChange} className="button-23">Save It</button>
  <button type="submit" className="button-23"> Post It </button>
  </li>
  </ul>
  </form>
  </div>
  )
}

export default CreateNewPost
