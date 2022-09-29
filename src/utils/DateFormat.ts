import moment from 'moment'

export default function (date: Date) {
  return moment(date, 'LLL')
}
