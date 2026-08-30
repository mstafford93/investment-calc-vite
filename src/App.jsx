import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import OutputData from './components/OutputData'


function App() {
  
  const [userInput, setUserInput] = useState({
          startInvest: 4000,
          annualInvest: 1200,
          expectReturn: 6,
          yearsInvest: 35
      })

      const callUserInput = (inputIdent, value) => {
        if (userInput.startInvest < 0 || userInput.annualInvest < 0 || userInput.expectReturn < 0 || userInput.yearsInvest < 0) {
            return (alert("Number can not be negative"),
                    setUserInput({
                            startInvest: 0,
                            annualInvest: 0,
                            expectReturn: 0,
                            yearsInvest: 0
            }))
        }
        setUserInput((prevState) => ({
            ...prevState,
            [inputIdent]: value
        }))
    }

  return (
    <>
      <Header user="M.Stafford"/>
      <UserInput userInput={userInput} callUserInput={callUserInput}/>
      <OutputData userInput={userInput}/>
    </>
  )
}

export default App
