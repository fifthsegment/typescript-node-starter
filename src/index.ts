import axios from 'axios';
const getRssFeed = async () => {
  var output = await axios.get('https://jsonplaceholder.typicode.com/users');
  return output;
}

await getRssFeed();

export { }