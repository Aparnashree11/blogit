import "../styles/forms.css";

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {UpdatePost, getPostDets} from "../actions/postsActions";
import {useNavigate, useParams} from "react-router-dom";

import Navbar from "../components/navbar";


function UpdatePosts(props) {

  let dispatch = useDispatch();

  let history = useNavigate();

  const current= new Date();

  const [state, setState] = useState({
    "title": "",
    "description": "",
    "isDraft": "false",
    "createdDate": current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate(),
    "username" : "Aparna"
  });

  const {title, description, isDraft, createdDate, username} = state;

  const [errors, setErrors] = useState("");

  const {_id}= useParams();

  const upost = useSelector(state => state.getPostDets);
  const {loading, error, post} = upost;

  useEffect(() => {
    dispatch(getPostDets(_id))
  }, [dispatch, _id]);

  useEffect(() => {
    if(post) {
        setState({...post});
    }
  },[post]);

  const handleInputChange= (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit=(e) => {
     e.preventDefault();
     if(!title || !description) {
       setErrors("Input all the fields!");
     }
     else {
        dispatch(UpdatePost(state, _id));
        history(`/post/${_id}`);
        setErrors("");
        console.log(state);
     }

  };

  return (
    <div>
      <header>
        <Navbar />
        </header>
    <div>
  <form className="form-style-7" onSubmit={handleSubmit}>
    <a className="back" href="/home"> ← home </a>
    <h5>Edit Post</h5>
    { error && <h3>{error}</h3> }
  <ul>
  <li>
  <label>Title</label>
  <input type="text" value={title || ""} name="title"
          onChange={handleInputChange} />
  <span>Enter title</span>
  </li>
   <li>
  <label>Description</label>
  <textarea type="text" value={description || ""} name="description"
          onChange={handleInputChange}> </textarea>
  <span>Enter content</span>
  </li>
  <li>
  <button type="submit" className="button-23"> Update </button>
  </li>
  </ul>
  </form>
  </div>
  </div>
  )
}

export default UpdatePosts
