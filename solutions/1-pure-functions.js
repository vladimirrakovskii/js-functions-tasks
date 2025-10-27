// BEGIN
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    else 
        for (let i = 2; i < num; i += 1) {
            if (num % i === 0) {
                return false;
            }
        }
    return true;
}

export default (num) => {
    if (isPrime(num)) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
// END
