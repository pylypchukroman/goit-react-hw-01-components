import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import style from './FriendList.module.css';


const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend__lists}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;


