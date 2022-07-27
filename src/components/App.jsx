import user from 'ElementJson/user.json';
import Profile from './Profile/Profile';

import data from 'ElementJson/data.json';
import Statistics from './Statistics/Statistics';

import friends from 'ElementJson/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from 'ElementJson/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
