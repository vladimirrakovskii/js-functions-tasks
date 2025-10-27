// BEGIN
export default (...dates) => {
  if (dates.length === 0) {
    return [];
  }

  return dates.map(([year, month, day]) => {
    const date = new Date(year, month - 1, day);
    return date.toDateString();
  });
};
// END
