// BEGIN
export default (users) => {
  return users.map(user => user.children).flat();
};
// END
