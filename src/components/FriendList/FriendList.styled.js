import styled from '@emotion/styled';

export const List = styled.ul`
  width: 480px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  margin: 0;
  padding: 20px 0 40px 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 180px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'tomato';
      default:
        return '#000';
    }
  }};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const FriendsName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
