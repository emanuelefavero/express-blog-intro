import axios from 'axios';

export const getPosts = async ({ signal } = {}) => {
  const { data } = await axios.get('/api/posts', { signal });

  return data.posts;
};

export const getPost = async (postId, { signal } = {}) => {
  const { data } = await axios.get(`/api/posts/${postId}`, { signal });

  return data;
};
