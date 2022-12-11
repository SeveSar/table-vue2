import data from '../cards.json';

const fetchData = () => new Promise((res) => {
  setTimeout(() => {
    res(data);
  }, 700);
});

export { fetchData };
