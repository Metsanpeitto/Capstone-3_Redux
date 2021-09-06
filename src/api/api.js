/* eslint-disable camelcase */
import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/find?';
const appId = '7d21fcc19d2a5ea9e47384b584b78a2e';

const cities = [
  'oulu',
  'helsinki',
  'tornio',
  'kemi',
  'lulea',
  'uppsala',
  'Göteborg',
  'stockholm',
  'oslo',
  'tromso',
  'vardo',
  'bergen',
  'copenhagen',
  'helsingor',
  'skagen',
  'aalborg',
];

const request = (city) => axios.get(`${url}q=${city}&appid=${appId}`);

const process = (result) => {
  let location = null;
  if (result) {
    if (result.status === 200) {
      const { data } = result;
      const { list } = data;
      // eslint-disable-next-line prefer-destructuring
      location = list[0];
    }
  }
  return location;
};

const getLocations = async () => {
  let locations = null;
  const axiosOulu = request(cities[0]);
  const axiosHelsinki = request(cities[1]);
  const axiosTornio = request(cities[2]);
  const axiosKemili = request(cities[3]);
  const axiosLulea = request(cities[4]);
  const axiosUppsala = request(cities[5]);
  const axiosGoteborg = request(cities[6]);
  const axiosStockholm = request(cities[7]);
  const axioOsslo = request(cities[8]);
  const axiosTromso = request(cities[9]);
  const axiosVardo = request(cities[10]);
  const axiosBergen = request(cities[11]);
  const axiosCopenhagen = request(cities[12]);
  const axiosHelsingor = request(cities[13]);
  const axiosSkagen = request(cities[14]);
  const axiosAlborg = request(cities[15]);

  await axios
    .all([
      axiosOulu,
      axiosHelsinki,
      axiosTornio,
      axiosKemili,
      axiosLulea,
      axiosUppsala,
      axiosGoteborg,
      axiosStockholm,
      axioOsslo,
      axiosTromso,
      axiosVardo,
      axiosBergen,
      axiosCopenhagen,
      axiosHelsingor,
      axiosSkagen,
      axiosAlborg,
    ])
    .then(
      axios.spread(
        (
          res0,
          res1,
          res2,
          res3,
          res4,
          res5,
          res6,
          res7,
          res8,
          res9,
          res10,
          res11,
          res12,
          res13,
          res14,
          res15,
        ) => {
          locations = {
            europe: {
              Finland: {
                oulu: process(res0),
                helsinki: process(res1),
                tornio: process(res2),
                kemili: process(res3),
              },
              Sweden: {
                lulea: process(res4),
                uppsala: process(res5),
                goteborg: process(res6),
                stockholm: process(res7),
              },
              Norway: {
                oslo: process(res8),
                tromso: process(res9),
                vardo: process(res10),
                bergen: process(res11),
              },
              Denmark: {
                copenhagen: process(res12),
                helsingor: process(res13),
                skagen: process(res14),
                aalborg: process(res15),
              },
            },
          };
        },
      ),
    );

  // eslint-disable-next-line no-unused-vars
  const countriesObject = locations.europe;
  const keys = Object.keys(countriesObject);
  const countriesNew = [];
  const kelvinDifference = 273.15;
  keys.forEach((k) => {
    const citiesObject = countriesObject[k];
    const citiesNew = [];
    const cities = Object.keys(citiesObject);
    cities.forEach((c) => {
      const cityObject = citiesObject[c];
      const {
        id, name, main, rain, snow,
      } = cityObject;
      const { temp_max, temp_min, humidity } = main;
      const tmpK = main.temp;
      const tempC = (tmpK - kelvinDifference).toFixed(2);
      const tempMaxC = (temp_max - kelvinDifference).toFixed(2);
      const tempMinC = (temp_min - kelvinDifference).toFixed(2);

      const temp = `${tempC} C `;
      const tempMax = `${tempMaxC} C `;
      const tempMin = `${tempMinC} C `;

      const city = {
        id,
        name,
        main,
        rain,
        snow,
        temp,
        tempMax,
        tempMin,
        humidity,
      };
      citiesNew.push(city);
    });
    countriesNew.push(citiesNew);
  });
  return countriesNew;
};
export default { getLocations };
