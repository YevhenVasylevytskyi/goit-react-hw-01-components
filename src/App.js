import Profile from './components/Profile/Profile';
import profiles from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={profiles.name}
        tag={profiles.tag}
        location={profiles.location}
        avatar={profiles.avatar}
        followers={profiles.stats.followers}
        views={profiles.stats.views}
        likes={profiles.stats.likes}
      />
      ,<Statistics stats={statisticalData} title="Upload stats"></Statistics>,
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
