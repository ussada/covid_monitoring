import moment from 'moment';
import {DATE_FORMAT} from '../constants';

const isDate = (value) => {
    const format = [
      moment.ISO_8601,
      DATE_FORMAT
    ]
  
    return moment(value, format, true).isValid();
  }

const dateToString = (date, format = DATE_FORMAT) => {
    if (isDate(date))
      return moment(date).format(format);
    else
      return date;
}

const stringToDate = (dateString, format = DATE_FORMAT) => {
  return moment(dateString, format).toDate();
}

const curDate = () => {
  return moment().toDate();
}

const dateAdd = (date, n, type = 'days') => {
  return moment(date).add(n, type).toDate();
}

export {
  isDate,
  dateToString,
  stringToDate,
  curDate,
  dateAdd
}