import PropTypes from 'prop-types';

const FriendListItem = ({ name, avatar, isOnline = 'true' }) => {
    return ( <li className="item">
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
</li> );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;