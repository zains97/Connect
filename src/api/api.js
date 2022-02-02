import axios from 'axios';

const hostURL = 'http://192.168.0.106:4050';

//APIs for posts
export const fetchPost = async () => {
  const {data} = await (
    await fetch(`${hostURL}/api/posts/61bb57d29427852cc3d2e5dd`)
  ).json();
  return data;
};

export const newPost = async (
  postBody,
  tags,
  creator,
  creatorImage,
  creatorName,
) => {
  const url = `${hostURL}/api/posts`;
  axios
    .post(url, {postBody, tags, creator, creatorImage, creatorName})
    .then(res => console.log(res.data));
};

export const getAllPosts = async (req, res) => {
  const {data} = await (await fetch(`${hostURL}/api/posts`)).json();
  return data;
};

export const newComment = async (creatorName, commentBody, creatorImage) => {
  const url = `${hostURL}/api/posts/new-comment/61f9db821e2712a7bb83602d`;
  axios.put(url, {creatorName, commentBody, creatorImage});
};

//APIs for user
export const loginUser = async (email, password) => {
  const url = `${hostURL}/api/auth/login`;
  const {data} = await axios.post(url, {email, password}).then(res => res.data);
  return data;
};

export const addFriend = async (userId, friendsId) => {
  const url = `${hostURL}/api/auth/add-friend/${friendsId}`;
  const data = axios.put(url, {friendsId});
};

export const signUp = async (
  firstName,
  lastName,
  email,
  password,
  gender,
  interests,
) => {
  const {data} = await axios.post(`${hostURL}/api/auth/register`, {
    firstName,
    lastName,
    email,
    password,
    gender,
    interests,
  });
  console.log('API RESPONSE:', {data});
  return {data};
};

export const uploadPicture = async (userId, profilePic) => {
  const url = `${hostURL}/api/user/upload-photo`;
  const data = await axios.put(url, {userId, profilePic});
  console.log(data);
  return data;
};
