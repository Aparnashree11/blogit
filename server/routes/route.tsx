import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts, getDrafts, getMyPosts } from '../controller/post-controller';

const router = express.Router();


router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.get('/post/:id', getPost);
router.get('/posts', getAllPosts);
router.get('/drafts', getDrafts);
router.get('/myposts', getMyPosts);


export default router;