import axios from 'axios';

const hostURL = 'http://192.168.0.106:4050';

export const fetchPost = async () => {
  const {data} = await (
    await fetch(`${hostURL}/api/posts/61bb57d29427852cc3d2e5dd`)
  ).json();
  return data;
};

export const newPost = async (postBody, likes, tags) => {
  const url = `${hostURL}/api/posts`;
  axios.post(url, {postBody, tags});
};

export const getAllPosts = async (req, res) => {
  const {data} = await (await fetch(`${hostURL}/api/posts`)).json();
  return data;
};

export const loginUser = async (email, password) => {
  const url = `${hostURL}/api/auth/login`;
  const {data} = await axios.post(url, {email, password}).then(res => res.data);
  return data;
};