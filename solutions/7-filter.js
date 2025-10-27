// BEGIN
export default (users) => {
    const friendsGirl = users.map(user => user.friends.filter((friend) => friend.gender === 'female'));
    return friendsGirl.flat();
}
// END
