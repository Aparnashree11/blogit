import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {

    return (
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
                        <a className="myButton" href="/mydrafts">Drafts</a>
                    </div>
                    <div>
                        <a className="myButton" href="/">Logout</a>
                    </div>
                </div>
            </header>
      </div>
    );
}

export default Navbar;



