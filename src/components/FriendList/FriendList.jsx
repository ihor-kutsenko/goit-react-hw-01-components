import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li class="item" key={friend.key}>
            <span class="status">{friend.isOnline ? true : false}</span>
            <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
}

export default FriendList;