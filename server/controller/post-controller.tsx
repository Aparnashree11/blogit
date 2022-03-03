import Post from "../model/post";


export const createPost = async (request: any, response: any) => {
    
    try {
        console.log("post create");
        const newpost = await new Post(request.body);
        newpost.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request:any, response:any) => {
    console.log("post update");
    try {
        
        const post:any = await Post.findById(request.params.id);
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request: any, response: any) => {
    console.log("post delete");
    try {
        
        const post:any = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request: any, response: any) => {
    console.log("post get");
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request: any, response: any) => {
    let posts;
    try {
        posts = await Post.find({ isDraft: false });
        console.log('Hoe', posts)
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getDrafts = async (request: any, response:any) => {
    let posts;
    try{
        posts = await Post.find({ isDraft: true });
        console.log('Hoe', posts)
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getMyPosts = async (request: any, response: any) => {
    let posts;
    try{
        posts = await Post.find({});
        console.log('Hoe', posts)
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}