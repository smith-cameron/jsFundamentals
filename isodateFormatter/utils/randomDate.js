import dayjs from 'dayjs'

const randomDate = () => {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomISODate() {

    const minYear = 2022;
    const maxYear = 2023;

    const year = getRandomInt(minYear, maxYear);
    const month = getRandomInt(1, 12);
    const day = getRandomInt(1, 31);
    const hour = getRandomInt(0, 23);
    const minute = getRandomInt(0, 59);
    const second = getRandomInt(0, 59);
    const millisecond = getRandomInt(0, 999);


    const output = new Date(year, month, day, hour, minute,second, millisecond)

    return dayjs(output);
  }
  return generateRandomISODate();
}
export default randomDate;