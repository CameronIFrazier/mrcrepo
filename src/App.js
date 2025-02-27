import React from "react";
import "./App.css";
import rhscalc from "./images/illustration-empty.svg";
import { useState } from "react";
import calc from "./images/icon-calculator.svg";

function App() {
  const [resultsScreen, setResultsScreen] = useState(false);
  const [renderImage, setRenderImage] = useState(true);
  const [mortgageAmountInPounds, setmortgageAmountInPounds] = useState("");
  const [mortgageTermAmount, setMortgageTermAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalRepayment, setTotalRepayment] = useState("");
  const [showTotal,setshowTotal] = useState(false);
  const [showInterest, setshowInterest] = useState(false);
  
  const handleResults = () => {
    if (resultsScreen === false) {
      setResultsScreen(true);
      setRenderImage(false);
      let p = mortgageAmountInPounds;
      let n = mortgageTermAmount;
      let totalNumberOfPayments = n * 12;
      let r = interestRate;
      r = r / 100;
      r = r / 12;
      n = n * 12;
      let onlyInterestMonthlyRate = r * p; 
      let interestOnlyAnswer = totalNumberOfPayments * onlyInterestMonthlyRate;
      console.log("monthly only interest: " + onlyInterestMonthlyRate  + "totalNumberOfPayments: "+ totalNumberOfPayments + "term total interest only: " + interestOnlyAnswer);
      let numerator = r * Math.pow(1 + r, n);
      let denominator = Math.pow(1 + r, n) - 1;
      let answer = p * (numerator / denominator);
      let totalRepayment = (p * answer)/1000;
      console.log("Your monthly repayments " + answer);
      setMonthlyPayment(answer);
      setTotalRepayment(totalRepayment);
      if(showTotal === true) {
        setMonthlyPayment(answer.toFixed(2));
        setTotalRepayment(totalRepayment.toFixed(2));
      } else {
        setMonthlyPayment(onlyInterestMonthlyRate.toFixed(2));
        setTotalRepayment(interestOnlyAnswer.toFixed(2));
      }
    } else {
      setResultsScreen(false);
      setRenderImage(true);
    }
  };

  const showInterestOnly = () => {
    setshowInterest(true);
    setshowTotal(false);
  }

  const showTotalOnly = () => {
    setshowInterest(false);
    setshowTotal(true);
  }


  const clearAll =() => {
    setmortgageAmountInPounds("");
    setMortgageTermAmount("");
    setInterestRate("");

  }
  return (
    <>
      <div className="wrapper">
        <div className="centerdualbox">
          <div className="leftBoxContainer">
            <div className="mortgagecalcdiv">
              Mortgage Calculator
              <div className="clearallbutton" on onClick={clearAll}>Clear All</div>
            </div>
            <div className="mortgageamountdiv">
              <header className="mortgageamountheader">Mortgage Amount</header>
              <textarea
                className="mortgageamounttextarea"
                value={mortgageAmountInPounds}
                onChange={(e) => setmortgageAmountInPounds(e.target.value)}
              ></textarea>
            </div>
            <div className="mortgageinfodiv">
              <header className="mortagetermheader"> Mortgage Term</header>
              <header className="interestrateheader"> Interest Rate</header>
              <textarea
                className="mortgageAndInterestRateTextAreas"
                value={mortgageTermAmount}
                onChange={(e) => setMortgageTermAmount(e.target.value)}
              ></textarea>
              <textarea
                className="mortgageAndInterestRateTextAreas"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              ></textarea>
            </div>
            <div className="mortgagetypeinfodiv">
              <header className="mortgagetypeheader"> Mortgage Type</header>
              <button className="mtypebuttons" type="radio" onClick={showTotalOnly}> Repayment</button>
              <button className="mtypebuttons" onClick={showInterestOnly}> Interest Only</button>
            </div>
            <div className="calculatePaymentButtoncContainer">
              <button className="calcpaymentbutton" onClick={handleResults}> <img src ={calc} alt="" className="calc"></img>
                {" "}
                Calculate Payments
              </button>
            </div>
          </div>
          <div className="resultscontainer">
            {renderImage && (
              <div className="resultsShownHereScreen">
                
                <img src={rhscalc} alt="" className="rhscalc" />{" "}
                <header className="resultsShownHereHeader">
                  {" "}
                  Results Shown Here
                </header>
                <p className="resultsShownHereParagraph">
                  Complete the form and click "calcualte payments" to see what
                  your monthly repayments would be.
                </p>
              </div>
            )}
            {resultsScreen && (
              <div className="resultsScreen">
                <header className="yourResultsHeader"> Your results</header>
                <p className="yourResultsParagraph">
                  Your results are shown below based on the information you
                  provided. To adjust the results, edit the form and click
                  "calculate payment" again.
                </p>

                <div className="resultsCalculationContainer">
                  
                  <div className="hideMonthlyRepayments">
                  <div className="yourMonthlyRepayments">
                    Your monthly repayments</div>
                    <div className="repaymentNumberInGreen" id="repaymentNumberInGreenId"> £
                       {monthlyPayment}
                    </div>
                  </div>
                  
                  <div className="totalYoullRepay">
                    {" "}
                    Total you'll repay over the term
                   
                  </div>
                  <div className="totalRepaymentAmount"> £{totalRepayment} </div>
                
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
