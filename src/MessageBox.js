import React, { useState } from 'react';
import './App.css';
import Slider from '@mui/material/Slider';

function App() {
  const [loanAmount, setLoanAmount] = useState(1000000); // Default loan amount is 10 lakh
  const [emi, setEmi] = useState(0);

  // Function to calculate EMI based on loan amount
  const calculateEmi = (amount) => {
    // You can use your own EMI calculation logic here
    // For simplicity, we'll use a fixed rate of 8% per annum for 2 years (24 months)
    const rateOfInterest = 0.08 / 12; // Monthly interest rate
    const numberOfPayments = 24; // 2 years (24 months)

    const emiAmount = (amount * rateOfInterest * (Math.pow(1 + rateOfInterest, numberOfPayments))) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    return emiAmount.toFixed(2); // Limit to 2 decimal places
  };

  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
    const calculatedEmi = calculateEmi(newValue);
    setEmi(calculatedEmi);
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <div className="emi-calculator">
        <h2>Loan Amount: ₹{loanAmount}</h2>
        <Slider
          value={loanAmount}
          min={100000} // Minimum loan amount (1 lakh)
          max={1000000} // Maximum loan amount (10 lakh)
          step={10000} // Increment by 10,000
          onChange={handleLoanAmountChange}
          valueLabelDisplay="auto"
        />
        <h2>EMI per month: ₹{emi}</h2>
      </div>
    </div>
  );
}

export default App;
