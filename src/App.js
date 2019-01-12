import React, { Component } from "react";
import "./App.css";
import girl from "./images/girl.png";
import { store } from "./store";
import { amountWithdraw } from "./actions";
class App extends Component {
  handleWithdraw = e => {
    const amount = e.target.dataset.amount;
    console.log(amount);
    store.dispatch(amountWithdraw(amount));
  };
  render() {
    const { username, totalAmount } = store.getState();
    return (
      <div className="App d-flex flex-column justify-content-centre">
        <img className="App_userImg" src={girl} alt="user" />
        <p className="App__username">Hello {username}</p>
        <div className="App_Amount">
          ${totalAmount}
          <p className="App__amount--info">Total Amount</p>
        </div>
        <section className="App__buttons">
          <button onClick={this.handleWithdraw} data-amount="10000">
            {" "}
            Withdraw $10,000
          </button>
          <button onClick={this.handleWithdraw} data-amount="5000">
            Withdraw $5,000
          </button>
        </section>
      </div>
    );
  }
}

export default App;
