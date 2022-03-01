import "../styles/blogs.css";
import {Link} from 'react-router-dom';

const PostDiv = ({title, username, createdDate, _id}) => {
    return (
        <div className="blog">
            <h3> {title} </h3>
            <h5> {username} </h5>
            <h5> {createdDate} </h5>
            <Link to={`post/${_id}`} className="myButton">Read</Link>
        </div>
    )
}

export default PostDiv;