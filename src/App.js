import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const accountBalance = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>APPLICATION OF REACT-REDUX</h1>
      <h1>UGX {accountBalance}</h1>
      <button onClick={() => depositMoney(5500)}>Deposit Money</button>
      <button onClick={() => withdrawMoney(1500)}>Withdraw Money</button>
    </div>
  );
}

export default App;
