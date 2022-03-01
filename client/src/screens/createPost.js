import "../styles/forms.css";

import React, { Component } from 'react'

export class CreatePost extends Component {
  render() {
    return (
      <div>
    <form class="form-style-7">
      <h5>Create Post</h5>
    <ul>
    <li>
    <label for="name">Title</label>
    <input type="text" name="name" maxlength="100"/>
    <span>Enter title</span>
    </li>
     <li>
    <label for="bio">Description</label>
    <textarea name="bio"></textarea>
    <span>Enter content</span>
    </li>
    <li>
    <input type="submit" value="Save it" / >
    <input type="submit" value="Post it" / >
    </li>

    </ul>
    </form>
    </div>
    )
  }
}

export default CreatePost