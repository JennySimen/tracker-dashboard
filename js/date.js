const getTodayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}


const getThisWeekDate = () => {
    const dateArr = [];
    const noOfDays = Array(10).keys();
    Array.from(noOfDays).map((idx) => {
        const d = new Date();
        d.setDate(d.getDate() - idx);
        dateArr.push(formatDate(d));
    });

    return dateArr;
}

const getLast7DaysDate = () => {
    const week = [];
    const noOfDays = Array(7).keys();
    Array.from(noOfDays).map((idx) => {
        let curr = new Date();
        let first = curr.getDate() - curr.getDay() + idx;
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
        week.push(format2Date(day));
    });
    return week;
}

function getLast12Months(date) {

    date = new Date(date);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return  monthIndex + '/' + year;
}

let now = new Date();

for ( let i=12; i>0; i--) {
    let newdate = now.setMonth(now.getMonth() - 1);
    console.log(getLast12Months(newdate ));
}



const getThisMonthDate = () => {
    const dateArr = [];
    const noOfDays = Array(30).keys();
    Array.from(noOfDays).map((idx) => {
        const d = new Date();
        d.setDate(d.getDate() - idx);
        dateArr.push(formatDate(d));
    });

    return dateArr;
}

const getSixMonthDate = () => {
    const sixMonthArr = [];
    const noOfDays = Array(182).keys();
    Array.from(noOfDdays).map((idx) => {
        const d = new Date();
        d.setDate(d.getDate() - idx);
        dateArr.push(formatDate(d));
    });

    return dateArr;
}

const formatDate = (dateData) => {
    console.log("before", dateData);
    var dd = String(dateData.getDate()).padStart(2, '0');
    var mm = String(dateData.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dateData.getFullYear();

    dateData = dd + '/' + mm + '/' + yyyy;
    return dateData;
}

const format2Date = (dateData) => {
    const dateArr = dateData.split("-");
    return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0]
}

