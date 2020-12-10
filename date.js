function daysOfMonth(date){
		switch (date.getMonth()){  // Checks for the month 
          	case 0:
            case 7:
                var days = [...Array(32).keys()]  // To get the full Days in a month.
                days.shift() // to delete th zero at the begining of array
                startingDay = date.getDay() // Gets the index of first week days in the month. 
                prevMonthDays = 31  // Number of days in previous month.
                if(startingDay){  // Will execute if the starting day is greater than zero.
                    for(startingDay;startingDay>1;startingDay--){ // This loop fill up the first week of the month .
                        days.unshift(prevMonthDays)                // with the previous month dates.
                        prevMonthDays -= 1
                    }
                }else{  // Will execute if the startingDay is equal to zero.
                    for(var i=6;i>0;i--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }
                endDay = new Date(`31 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay() // It takes the index of last day of the month in terms of week days.
                if(endDay){ // This loop fill up last week of the month with the next month dates if needed.
                    nextDay = 1
                    for(endDay; endDay<7;endDay++){
                        days.push(nextDay)
                        nextDay += 1
                    }
                }
            	return days.flat() // And finally The whole month date is ready in a form of array 
                break
            case 1: // Below conditional checks if the the the year is leap.
                if( (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) ||
                  (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 === 0 && date.getFullYear() % 400 === 0) ) {
                    var days = [...Array(30).keys()]  // Days of the month array.
                    var endDay = new Date(`29 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay()
                    }else{ // if Leap year Feb will be 29 else 28 days.
                    var days = [...Array(29).keys()]  // Days of the month array.
                    var endDay = new Date(`28 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay()
                    }
                days.shift() // to delete th zero at first of array
                startingDay = date.getDay() // first of the month in week days.
                prevMonthDays = 31  // Number of days in previous month.
                if(startingDay){ // 
                    for(startingDay;startingDay>1;startingDay--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }else {
                    for(var i=6;i>0;i--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }
                if(endDay){
                    nextDay = 1
                    for(endDay; endDay<7;endDay++){
                        days.push(nextDay)
                        nextDay += 1
                    }
                }
            	return days.flat()
                break
          	case 2:
                var days = [...Array(32).keys()]  // Days of the month array.
                days.shift() // to delete th zero at first of array
                startingDay = date.getDay()// first of the month in week days.
                prevMonthDays = 29  // Number of days in previous month.
                if(startingDay){ // 
                    for(startingDay;startingDay>1;startingDay--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }else {
                    for(var i=6;i>0;i--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }
                endDay = new Date(`31 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay()
                if(endDay){
                    nextDay = 1
                    for(endDay; endDay<7;endDay++){
                        days.push(nextDay)
                        nextDay += 1
                    }
                }
            	return days.flat()
                break
            case 3:
            case 5:
            case 8:
            case 10:
                var days = [...Array(31).keys()]  // Days of the month array.
                days.shift() // to delete th zero at first of array
                startingDay = date.getDay() // first of the month in week days.
                prevMonthDays = 31  // Number of days in previous month.
                if(startingDay){ // 
                    for(startingDay;startingDay>1;startingDay--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }else {
                    for(var i=6;i>0;i--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }
                endDay = new Date(`30 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay()
                if(endDay){
                    nextDay = 1
                    for(endDay; endDay<7;endDay++){
                        days.push(nextDay)
                        nextDay += 1
                    }
                }
            	return days.flat()
                break
          	case 4:
            case 6:
            case 9:
            case 11:
                var days = [...Array(32).keys()]  // Days of the month array.
                days.shift() // to delete th zero at first of array
                startingDay = date.getDay() // first of the month in week days.
                prevMonthDays = 30  // Number of days in previous month.
                if(startingDay){ // 
                    for(startingDay;startingDay>1;startingDay--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }else {
                    for(var i=6;i>0;i--){
                        days.unshift(prevMonthDays)
                        prevMonthDays -= 1
                    }
                }
                endDay = new Date(`31 ${months[date.getMonth()]} ${date.getFullYear()}`).getDay()
                if(endDay){
                    nextDay = 1
                    for(endDay; endDay<7;endDay++){
                        days.push(nextDay)
                        nextDay += 1
                    }
                }
            	return days.flat()
                break
          default: return null
        }
}
var months = ['Jan','Feb','Marc','April','May','June','July','Augest','Sep','Oct','Nov','Dec']
console.log(daysOfMonth(new Date('1 Augest 2020')))
