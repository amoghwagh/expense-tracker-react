import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
        </div>
      </div>
    );
  }
}

export default App;
