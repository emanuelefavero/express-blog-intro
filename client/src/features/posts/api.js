import axios from 'axios';

export const getPosts = async () => {
  const { data } = await axios.get('/api/posts');

  return data.posts;
};

export const getPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);

  return data;
};
