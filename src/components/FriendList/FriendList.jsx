import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListElem from './ElemFrend/FrendListElem';

export default function FriendList({ friends }) {
  return (
    <ul class={s.friendlist}>
      {friends.map(friend => (
        <FriendListElem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
