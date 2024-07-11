import React from "react";
import "./App.css";
import rhscalc from "./images/illustration-empty.svg";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="centerdualbox">
          <div className="leftBoxContainer"> 
          <div className="mortgagecalcdiv">
            Mortgage Calculator
            <div className="clearallbutton">Clear All</div>
          </div>
          <div className="mortgageamountdiv">
            <header className="mortgageamountheader">Mortgage Amount</header>
            <textarea className="mortgageamounttextarea"></textarea>
          </div>
          <div className="mortgageinfodiv">
            <header className="mortagetermheader"> Mortgage Term</header>
            <header className="interestrateheader"> Interest Rate</header>
            <textarea></textarea>
            <textarea className="mortgageAndInterestRateTextAreas"></textarea>
          </div>
          <div className="mortgagetypeinfodiv">
            <header className="mortgagetypeheader"> Mortgage Type</header>
            <button className="mtypebuttons"> Repayment</button>
            <button className="mtypebuttons"> Interest Only</button>
          </div>
          <div className="calculatePaymentButtoncContainer">
          <button className="calcpaymentbutton"> Calculate Payments</button>
          </div>
          </div>
          <div className="resultscontainer">
          <img src={rhscalc} alt="" className="rhscalc" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
