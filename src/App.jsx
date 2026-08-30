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
        
        setUserInput((prevState) => ({
            ...prevState,
            [inputIdent]: +value  //Plus makes it return number not string
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
