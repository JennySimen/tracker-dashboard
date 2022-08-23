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
    const noOfDays = Array(7).keys();
    Array.from(noOfDays).map((idx) => {
        const d = new Date(); 
        d.setDate(d.getDate() - d.getDay() + idx);
        dateArr.push(formatDate(d)); 
    });

    return dateArr;
}

const getThisMonthDate = () => {
    const dateArr = [];
    const noOfDays = Array(30).keys();
    Array.from(noOfDays).map((idx) => {
        const d = new Date(); 
        d.setDate(d.getDate() - d.getDay() + idx);
        dateArr.push(formatDate(d)); 
    });

    return dateArr;
}

const getSixMonthDate = () => {
    const sixMonthArr = [];
    const noOfDays = Array(182).keys();
    Array.from(noOfDdays).map((idx) => {
        const d = new Date();
        d.setDate(d.getDate() - d.getDay() + idx);
        dateArr.push(formatDate(d));
    });

    return dateArr;
}

const formatDate = (dateData) => {
    var dd = String(dateData.getDate()).padStart(2, '0');
    var mm = String(dateData.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = dateData.getFullYear();

    dateData = dd + '/' + mm + '/' + yyyy;
    return dateData;
}