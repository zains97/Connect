export const fetchPost = async () => {
  const {data} = await (
    await fetch('http://192.168.0.106:5000/api/posts/61bb57d29427852cc3d2e5dd')
  ).json();

  return data;
};
