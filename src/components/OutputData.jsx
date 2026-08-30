import React from 'react'
import { calculateInvestmentResults } from "../util/investment.js"

const OutputData = ({ userInput }) => {

    const resultData = calculateInvestmentResults({
        initialInvestment: +userInput.startInvest,
        annualInvestment: +userInput.annualInvest,
        expectedReturn: +userInput.expectReturn,
        duration: +userInput.yearsInvest
    });

    console.log(resultData)

    return (
        <div></div>
    )
}

export default OutputData
