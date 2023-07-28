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

function get12MonthsDates() {
    const finalData = [];
    let now = new Date();
    const year = now.getFullYear();

    for ( let i=1; i <= 12; i++) {
        const monthDates = [];
        const noOfDays = Array(30).keys();
        Array.from(noOfDays).map((idx) => {
            monthDates.push(`${String(idx + 1).padStart(2, '0')}/${String(i).padStart(2, '0')}/${year}`);
        });
        //break a month into arrays of 10 days
        finalData.push(chunkIntoN(monthDates, 3));
    };

    return finalData;
}

const chunkIntoN = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
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

