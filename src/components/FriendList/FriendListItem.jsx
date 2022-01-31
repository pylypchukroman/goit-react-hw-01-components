import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = ({ name, avatar, isOnline = 'true' }) => {
    return ( <li className={style.item}>
   <span className={isOnline ? style.statusOnline : style.statusOffline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
</li> );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;