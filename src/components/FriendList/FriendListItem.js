import PropTypes from 'prop-types';
import {
  FriendItem,
  Status,
  FriendAvatar,
  FriendsName,
} from './FriendList.styled';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendsName>{name}</FriendsName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendListItem };
