import React from 'react'

const OutputData = ({userInput}) => {
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
