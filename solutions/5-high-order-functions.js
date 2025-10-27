import _ from 'lodash';

// BEGIN
export default (users, count = 1) => {
    const sortUsers = _.sortBy(users, (user) => Date.parse(user.birthday));
    const res = sortUsers.slice(0, count);
    return res;
}
// END
