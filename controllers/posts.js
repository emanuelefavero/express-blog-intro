import {
  getAllPosts,
  getPostsByTag,
  getSinglePostById,
  searchPosts,
  sortPostsById,
  sortPostsByTitle,
} from '../data/posts.js';

export const getPosts = (req, res) => {
  const { tag, search, sortBy, order } = req.query;

  let posts = getAllPosts();

  if (tag) {
    posts = getPostsByTag(tag, posts);
  }

  if (search) {
    posts = searchPosts(search, posts);
  }

  if (sortBy === 'title') {
    posts = sortPostsByTitle(order, posts);
  } else if (sortBy === 'id') {
    posts = sortPostsById(order, posts);
  }

  res.json({ posts });
};

export const getPostById = (req, res) => {
  const postId = Number(req.params.id);
  const post = getSinglePostById(postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post non trovato' });
  }
};
