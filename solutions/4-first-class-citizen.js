const run = (text) => {
    // BEGIN
const takeLast = (str, count) => {
        if (str.length < count) {
          return null;
        }
        if (str === '') {
          return null;
        }
        const lastChars = str.slice(-count);
        const res = lastChars.split('').reverse().join('');
        return res;
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;
