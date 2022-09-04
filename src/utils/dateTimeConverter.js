const dateTimeConverter = (dateTime) => {
  const date = dateTime.match(/.+?(?=T)/);
  return date;
};

export default dateTimeConverter;
