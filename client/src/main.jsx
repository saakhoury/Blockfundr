import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

import { Sepolia } from "@thirdweb-dev/chains";

import App from './App';
import './index.css';
const connectButton = document.getElementById("connectButton");
const walletID = document.getElementById("walletID");

if (typeof window.ethereum !== "undefined") {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        const account = accounts[0]

        walletID.innerHTML = `Wallet connected: ${account}`;
      })
} else {
      window.open("https://metamask.io/download/", "_blank");
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider
    activeChain={ Sepolia } 
    clientId="4af8530959dabc1f981825b8adaf22f5"
    >
        <Router>
            <App />
        </Router>

    </ThirdwebProvider>
)