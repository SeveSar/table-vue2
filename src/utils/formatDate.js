const optionsDate = {
  day: 'numeric',
  year: 'numeric',
  month: 'numeric',
};
const formatDate = (time) => {
  const date = new Date(time);
  return `${date.toLocaleDateString('ru-RU', optionsDate)} ${date.toLocaleTimeString(date)}`;
};

export default formatDate;
