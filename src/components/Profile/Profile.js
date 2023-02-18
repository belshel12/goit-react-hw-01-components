import PropTypes from 'prop-types';
import {
  UserProfile,
  UserData,
  Avatar,
  UserName,
  Description,
  List,
  Item,
  ItemValue,
} from './Profile.styled';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <UserProfile>
      <UserData>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Description>@{tag}</Description>
        <Description>{location}</Description>
      </UserData>

      <List>
        <Item>
          <span>Followers</span>
          <ItemValue>{followers}</ItemValue>
        </Item>
        <Item>
          <span>Views</span>
          <ItemValue>{views}</ItemValue>
        </Item>
        <Item>
          <span>Likes</span>
          <ItemValue>{likes}</ItemValue>
        </Item>
      </List>
    </UserProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export { Profile };
