import React from 'react';
import classes from './App.module.css';

const TronWeb = require('tronweb');
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = '...';
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

function App() {
  const buttonClickHandler = async () => {
    var fromAddress = 'TBNZd3tqJuPYTtVGwDeR4wPNgBseX1QbAH'; //address _from
    const addressList = [
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 1 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 2 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 3 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 4 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 5 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 6 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 7 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 8 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 9 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 10 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 11 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 12 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 13 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 14 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 15 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 16 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 17 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 18 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 19 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 20 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 21 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 22 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 23 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 24 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 25 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 26 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 27 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 28 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 29 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 30 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 31 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 32 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 33 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 34 },
      { userAdr: 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y', userAmount: 35 },
    ];
    const timInterval = 0.5;

    // var toAddress = 'TGupi94VaCpm9DaTvne6WaytYbTLA69m5Y'; //address _to
    // var amount = 10000000; //amount 10,000000 = 10 TRX

    //Creates an unsigned TRX transfer transaction
    console.log('Loading..');
    const promises = addressList.map(
      (address, i) =>
        new Promise((resolve) =>
          setTimeout(async () => {
            const tradeobj = await tronWeb.transactionBuilder.sendTrx(
              address.userAdr,
              address.userAmount,
              fromAddress
            );
            const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
            const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
            console.log('- Output:', receipt, '\n');

            console.log(
              'address:' + address.userAdr,
              'amount to send: ' + address.userAmount + ' TRX'
            );
            resolve();
          }, timInterval * 1000 * addressList.length - timInterval * 1000 * i)
        )
    );
    Promise.all(promises).then(() => console.log('all done'));
  };

  return (
    <div className={classes.Parent}>
      <div className={classes.Container}>
        <h3>Token Redistribution</h3>
        <div>
          <p>imput array</p>
          <input type="text"></input>
          <form></form>
        </div>
        <br></br>
        <button onClick={buttonClickHandler}>
          <h1>START</h1>
        </button>
      </div>
    </div>
  );
}

export default App;
