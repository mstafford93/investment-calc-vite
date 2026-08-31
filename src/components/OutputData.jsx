import React from 'react'
import { calculateInvestmentResults, formatter } from "../util/investment.js"
import { generatepdf } from '../util/generateReport.js'
import './CssOutputData.css'
import UserInput from './UserInput.jsx'

const OutputData = ({ userInput }) => {

  if (userInput.startInvest <= 0 || userInput.expectReturn <= 0 || userInput.annualInvest <= 0) {
      return <p className='userError'>Please enter values greater than zero.</p>;
    }

  if (userInput.yearsInvest <= 0) {
      return <p className='userError'>Please enter a duration greater than zero.</p>;
    }

    const resultData = calculateInvestmentResults({
        initialInvestment: +userInput.startInvest,
        annualInvestment: +userInput.annualInvest,
        expectedReturn: +userInput.expectReturn,
        duration: +userInput.yearsInvest
    });

    console.log(resultData)

    const handleGenerateReport = () => {
      generatepdf({...userInput, results: resultData})
    }

    return (
      <>
      <button onClick={handleGenerateReport}>Generate Report</button>
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
          <td>{formatter.format(yearData.investmentValue)}</td>
          <td>{formatter.format(yearData.interest)}</td>
          <td>{formatter.format(yearData.totalInterest)}</td>
          <td>{formatter.format(yearData.investedCapital)}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
)
}

export default OutputData
