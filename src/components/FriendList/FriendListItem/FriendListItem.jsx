import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, name, avatar, id }) => {
  const statusClassName = isOnline ? css.online : css.offline;
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${statusClassName}`} />
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
        
  );
};

export default FriendListItem;