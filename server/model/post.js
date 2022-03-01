import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: 'Aparna'
    },
    isDraft: {
        type: Boolean,
        default: false   
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});


const post = mongoose.model('post', PostSchema);

export default post;