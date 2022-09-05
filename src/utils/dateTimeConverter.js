// getting dateTime from the API in the following format: "2022-10-05T20:00:00" - utility is for separating date from time
const dateTimeConverter = (dateTime) => {
  const date = dateTime.match(/.+?(?=T)/);
  return date;
};

export default dateTimeConverter;
