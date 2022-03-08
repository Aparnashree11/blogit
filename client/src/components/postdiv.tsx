import "../styles/blogs.css";
import {Link} from 'react-router-dom';

const PostDiv = ({title, username, createdDate, _id, imageURL}) => {
    return (
        <div className="blog">
            <img src={imageURL} alt="BlogImage" />
            <br />
            <h3> {title} </h3>
            <h5> <i> {createdDate} </i> </h5>
            <Link to={`post/${_id}`} className="button-23">Read</Link>
        </div>
    )
}

export default PostDiv;