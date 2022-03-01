import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
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


const Post = mongoose.model('Blogs', PostSchema);

export default Post;