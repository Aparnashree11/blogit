import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    username: {
        type: String,
    },
    isDraft: {
        type: String,  
    },
    createdDate: {
        type: String,
    },
    imageURL: {
        type: String,
    },
});


const Post = mongoose.model('Blogposts', PostSchema);

export default Post;