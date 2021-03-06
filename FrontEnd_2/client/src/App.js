import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Survey from './components/survey';
import Winner from './components/winner';
import Ranking from './components/ranking';

//import SimpleStorageContract from "./contracts/SimpleStorage.json";

import BeApp from "./contracts/BeApp.json";
import getWeb3 from "./utils/getWeb3";


import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = BeApp.networks[networkId];
      const instance = new web3.eth.Contract(
        BeApp.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/ranking" component={Ranking} />
              <Route exact path="/winner" component={Winner} />
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
