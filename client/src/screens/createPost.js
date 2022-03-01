import "../styles/forms.css";

import React, { useState } from 'react'
import axios from "axios"


function CreatePost(props) {

  const [input,setInput] = useState({
    title:"",
    desc:"",  
    username:"Aparna",
    isDraft:"false",
    createdDate: Date.now()
});
function handleClick(event)
{
   event.preventDefault();
   console.log({input})
   axios.post('https://localhost:8000/create',input)

}
function handleChange(event)
{
    const{name,value} = event.target;
    setInput(prevInput => {
        return{
            ...prevInput,
            [name]: value
        }
    })
}

  return (
    <div>
  <form className="form-style-7">
    <h5>Create Post</h5>
  <ul>
  <li>
  <label>Title</label>
  <input type="text" name="title"
           onChange={handleChange}/>
  <span>Enter title</span>
  </li>
   <li>
  <label>Description</label>
  <textarea name="desc" onChange={handleChange}></textarea>
  <span>Enter content</span>
  </li>
  <li>
  <button type="submit" onClick={handleChange} value="true">Save It</button>
  <button type="submit" onClick={handleClick}>Post It</button>
  </li>
  </ul>
  </form>
  </div>
  )
}

export default CreatePost
