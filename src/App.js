
import './App.css';
import Profile from "./components/Profile/Profile.jsx";
import user from "./data/user.json";
import data from "./data/data.json";
import Statistics from "./components/Statistics/Statistics.jsx";
import FriendList from './components/FriendList/FriendList.jsx';
import friends from "././data/friends.json";
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './data/transactions.json';


function App() {
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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
