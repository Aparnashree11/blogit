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
    }
});


const Post = mongoose.model('Blogit', PostSchema);

export default Post;