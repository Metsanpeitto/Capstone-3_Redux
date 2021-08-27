
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/forecast?';
const appId = '7d21fcc19d2a5ea9e47384b584b78a2e';

const getBooks = async () => axios.get(`${url}/apps/${appId}/books`).then((result) => {
  const books = [];
  if (result.status === 200) {
    const { data } = result;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(data)) {
      const id = key;
      const obj = value;
      const book = {
        item_id: id,
        title: obj[0].title,
        category: obj[0].category,
      };
      books.push(book);
    }
  }
  return books;
});

const addBook = async (book) => axios
  .post(`${url}/apps/${appId}/books`, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  })
  .then((result) => result.data);

const removeBook = async (id) => axios
  .delete(`${url}/apps/${appId}/books/${id}`, {
    item_id: id,
  })
  .then((result) => result.data)
  .catch(() => 'error');

export default { getBooks, addBook, removeBook };
