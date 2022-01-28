import React from "react";
import Header from "./Header";
import NewTransfer from "./NewTransfer";
import TransferList from "./TransferList";
import { getWallet, getWeb3 } from "./utils";
function App() {
  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts] = React.useState(null);
  const [wallet, setWallet] = React.useState(null);
  const [approvers, setApprovers] = React.useState([]);
  const [quorum, setQuorum] = React.useState(null);
  const [transfers, setTransfers] = React.useState([]);

  React.useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);
  const createTransfer = (transferObj) => {
    wallet.methods
      .createTransfer(transferObj.amount, transferObj.to)
      .send({ from: accounts[0] });
  };
  const approveTransfer = (transferId) => {
    wallet.methods.approveTransfer(transferId).send({ from: accounts[0] });
  };
  if (!web3 || !accounts || !wallet) {
    return <div>Loading....</div>;
  }
  return (
    <div className="App">
      Multisig Dapp
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList approveTransfer={approveTransfer} transfers={transfers} />
    </div>
  );
}

export default App;
