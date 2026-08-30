import React from 'react'
import { calculateInvestmentResults } from "../util/investment.js"

const OutputData = ({ userInput }) => {

    const resultData = calculateInvestmentResults({
        initialInvestment: +userInput.initialInvest,
        annualInvestment: +userInput.annualInvest,
        expectedReturn: +userInput.expectedReturn,
        duration: +userInput.yearsInvest
    });

    console.log(resultData)

    return (
        <div></div>
    )
}

export default OutputData
