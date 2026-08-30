import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts').then(({ data }) => data.posts);
};

export const getPost = (postId) => {
  return axios.get(`/api/posts/${postId}`).then(({ data }) => data);
};
