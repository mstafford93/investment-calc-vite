import React from 'react'
import { calculateInvestmentResults } from "../util/investment"

const OutputData = ({ userInput }) => {

    const resultData = calculateInvestmentResults({
        initialInvestment: +userInput.initialInvestment,
        annualInvestment: +userInput.annualInvestment,
        expectedReturn: +userInput.expectedReturn,
        duration: +userInput.duration
    });

    return (

        <div>
            <p>{userInput.startInvest}</p>
            <p>{userInput.annualInvest}</p>
            <p>{userInput.expectReturn}</p>
            <p>{userInput.yearsInvest}</p>
        </div>
    )
}

export default OutputData
