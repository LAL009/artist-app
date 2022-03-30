import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

// @return e.g 194 Elizabeth Street, Bordentown, NJ 08505
export const getFullAddress = (address) => {
  return `${address.street_address}, ${address.city}, ${address.state} ${address.zipcode}`;
};

// @param: date in ISO 8601 string format: '2018-04-04T16:00:00.000Z'
// @return: formatted date example: December 10th, 2021
export const formatDate = (date) => {
  const dateFormat = dayjs.extend(advancedFormat);
  return dateFormat(date).format('MMMM Do, YYYY');
};

export const isDueDate = (createdAt) => {
  const createdDate = dayjs(createdAt);
  const currentDate = dayjs();
  const diff = currentDate.diff(createdDate, 'd');
  return diff < 14;
};
