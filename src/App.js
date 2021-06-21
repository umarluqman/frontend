import { Route, Switch } from 'react-router-dom';
import './App.css';


import Deposit from './pages/DepositUST';
import DepositUST from './pages/DepositUST';
import Home from './pages/Home';
import Info from './pages/Info';
import Stake from './pages/Stake';
import Swap from './pages/Swap';
import Withdraw from './pages/WithdrawUST';
import WithdrawUST from './pages/WithdrawUST';
//import Error from './pages/Error';
function App() {

  return (
    <div className="App">

      <Switch>
        <Route path="/" component={Swap} exact />
        <Route path="/Swap" component={Swap} />
        <Route path="/Stake" component={Stake} />
        <Route path="/Deposit/ust-pools-lps" component={DepositUST} />
        <Route path="/Withdraw/ust-pools-lps" component={WithdrawUST} />
        <Route path="/Deposit" component={Deposit} />
        <Route path="/Withdraw" component={Withdraw} />
        <Route path="/Info" component={Info} />

        {/*<Route component={Error} />*/}
      </Switch>

    </div>
  );
}

export default App;
