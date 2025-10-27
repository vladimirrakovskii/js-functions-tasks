import _ from 'lodash';

// BEGIN
export default (...nums) => {
    if (nums.length === 0) {
        return null;
    }
    const res = _.sum(nums)/nums.length;
    return res;
}
// END
