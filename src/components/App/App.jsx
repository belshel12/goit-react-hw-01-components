import { Profile } from 'components/Profile/Profile';
import user from '../data-json/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../data-json/data';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../data-json/friends';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import transactions from '../data-json/transactions';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
