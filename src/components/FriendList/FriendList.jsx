import PropTypes from 'prop-types';
import css from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        const statusClassName = friend.isOnline ? css.online : css.offline;
        return (
          <li className={css.item} key={friend.id}>
            <span className={`${css.status} ${statusClassName}`} /> 
            <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
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