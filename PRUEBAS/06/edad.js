const moment = require('moment')

function diffInDays(input) {
    const now =moment()
    const date = moment(input, 'YYYY-MM-DD')
    return now.diff(date, 'years')

}

console.log(`Han pasado ${diffInDays('1956-07-19')} dias desde tu cumpleaños`)