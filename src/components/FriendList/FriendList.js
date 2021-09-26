import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.friend_list}>
      {friends.map(friend => (
        <li key={friend.id} className={style.item}>
          <span
            className={friend.isOnline ? style.isOnline : style.isOffline}
          ></span>
          <img
            className={style.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
