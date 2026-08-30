import axios from 'axios';

export const getPosts = () => {
  return axios.get('/bacheca').then(({ data }) => data.posts);
};

export const getPost = (postId) => {
  return axios.get(`/bacheca/${postId}`).then(({ data }) => data);
};
