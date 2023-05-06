/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

 }
 function createEmployeeRecords(employeeArray){
     /*
     let employeeRecords = []
     for(const employee of employeeArray){
         employeeRecords.push(createEmployeeRecord(employee))
     }
     return employeeRecords
*/

     return employeeArray.map(createEmployeeRecord)
 }

 function createTimeInEvent(dateStamp){
    //this is an employee
    let date = dateStamp.split(' ')[0]
    let hour = dateStamp.split(' ')[1]

    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour),
        date:date
    })
    return this 

 }

 function createTimeOutEvent(dateStamp){
    let date = dateStamp.split(' ')[0]
    let hour = dateStamp.split(' ')[1]

    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour),
        date:date
    })

    return this 
 }
 
 function hoursWorkedOnDate(date){

    const timeIn = this.timeInEvents.find(record => record.date === date)
    const timeOut = this.timeOutEvents.find(record => record.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(date){
   const numbers =  hoursWorkedOnDate.call(this,date)
   return numbers * this.payPerHour
}



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(collection,firstNameString){
    return collection.find(record => record.firstName === firstNameString)
    
}

function calculatePayroll(records){
    return records.reduce((accumulator,record)=>{

        return allWagesFor.call(record) + accumulator
    },0)

}