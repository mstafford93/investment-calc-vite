import React from 'react'
import { calculateInvestmentResults } from "../util/investment.js"
import './CssOutputData.css'

const OutputData = ({ userInput }) => {

    const resultData = calculateInvestmentResults({
        initialInvestment: +userInput.startInvest,
        annualInvestment: +userInput.annualInvest,
        expectedReturn: +userInput.expectReturn,
        duration: +userInput.yearsInvest
    });

    console.log(resultData)

    return (
  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {resultData.map((yearData, index) => (
        <tr key={index}>
          <td>{yearData.year}</td>
          <td>£ {yearData.investmentValue.toFixed(2)}</td>
          <td>£ {yearData.interest.toFixed(2)}</td>
          <td>£ {yearData.totalInterest.toFixed(2)}</td>
          <td>£ {yearData.investedCapital.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
}

export default OutputData
