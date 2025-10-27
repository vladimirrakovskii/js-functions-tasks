const smallestDivisor = (num) => {
    // BEGIN
if (num === 1) {
      return 1;
    }
    
    const iter = (count) => {
      if (count > Math.sqrt(num)) {
        return num;
      }
      if (num % count === 0) {
        return count;
      }
      return iter(count + 1);
    }
    return iter(2);
    // END
  };
  
export default smallestDivisor;
  
