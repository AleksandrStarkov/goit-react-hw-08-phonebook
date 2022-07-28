import PropTypes from 'prop-types';
import s from './FriendListElem.module.css';

export default function FriendListElem({ friend }) {
  return (
    <li className={s.item} key={friend.id}>
      <span className={friend.isOnline ? s.statusOn : s.statusOff}>
        {friend.isOnline}
      </span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
}

FriendListElem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
