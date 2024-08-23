import randomDate from './randomDate.js';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

const now = dayjs()
const newDate = randomDate()
const monthDiff = newDate.diff(now, 'month')
// const nowISO = now.toISOString()
const newISO = newDate.toISOString()

//< testing stuff -----
// console.log(now)
console.log(newISO);
const randY = newDate.year()
const randM = newDate.month()
const thisM = now.month()
const thisY = now.year()
console.log(randM)
console.log(randY)
console.log(thisM)
console.log(thisY)
// < ----------------
// > Returns ----------
const formatPastDateThisYear = () => `${monthDiff} months ago`;
const formatFutureDatesThisYear = () => `${monthDiff} months ahead`;

//> Logic ----------
const formatDate = () => {
  return thisY === randY ?
    randM <= thisM ?
      formatPastDateThisYear() :
      formatFutureDatesThisYear() :
    `${dayjs(newISO, 'MMMM D')}`
}



export default formatDate;
