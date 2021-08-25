import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/find?';
const appId = '7d21fcc19d2a5ea9e47384b584b78a2e';

const getLocations = async () => axios.get(`${url}q=London&appid=${appId}`).then((result) => {
  let location = null;
  if (result.status === 200) {
    const { data } = result;
    const { list } = data;
    // eslint-disable-next-line prefer-destructuring
    location = list[0];
    return location;
  }
  return location;
});

export default { getLocations };
