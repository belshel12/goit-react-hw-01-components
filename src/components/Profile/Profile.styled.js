import styled from '@emotion/styled';

export const UserProfile = styled.div`
  min-width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  color: grey;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  margin-bottom: 24px;
  width: 130px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: teal;
  background-size: cover;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
  padding: 0;
  margin: 0;
  color: black;
`;

export const Description = styled.p`
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ItemValue = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: black;
`;
