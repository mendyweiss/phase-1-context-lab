/* Your Code Here */

const createEmployeeRecord = function (arr = [firstName, familyName, title, payPerHour]) {
    return {
        firstName : arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function (arr) {
    return arr.map(record => createEmployeeRecord(record))
}

function createTimeInEvent (timeStamp) {
    let [date, hour] = timeStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    })
    return this
}

function createTimeOutEvent (timeStamp) {
    let [date, hour] = timeStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate (employeeRec, date) {
    return employeeRec.timeOutEvents[0].hour - employeeRec.timeInEvents[0].hour
}

function wagesEarnedOnDate () {
    return null
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

