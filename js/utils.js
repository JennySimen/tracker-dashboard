// adds 0 infront of number when it is less than 10
const padO = (number) => {
    return ('0' + number).slice(-2);
}

const generate_unique_code = (val) => {
    let codes = [];

    Array(val).fill().map((i) => {
        codes.push(Math.floor(Date.now() * Math.random()));
    });
    return codes;
}
