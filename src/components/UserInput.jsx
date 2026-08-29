import React, {useState} from 'react'
import '../components/CssUserInput.css'

const UserInput = () => {

    const [userInput, setUserInput] = useState({
        startInvest: 4000,
        annualInvest: 1200,
        expectReturn: 6,
        yearsInvest: 35
    })

    const callUserInput = (inputIdent, value) => {
        if(userInput.startInvest < 0 || userInput.annualInvest < 0 || userInput.expectReturn < 0 ||userInput.yearsInvest < 0){
            return (alert("Number can not be negative"))
        }
        setUserInput((prevState) => ({
            ...prevState, 
            [inputIdent]:value
        }))
    }

    console.log(userInput)

  return (
    <section className='user-inputs'>
    <div className='input-fields'>
        <p>
            <label>Starting Investment £</label>
            <input type="number" value={userInput.startInvest} required onChange={(e)=>callUserInput("startInvest", e.target.value)}/>
        </p>
        <p>
            <label>Annual Investment £</label>
            <input type="number" required value={userInput.annualInvest} onChange={(e)=>callUserInput("annualInvest", e.target.value)}/>
        </p>
        <p>
            <label>Expected Return %</label>
            <input type="number" required value={userInput.expectReturn} onChange={(e)=>callUserInput("expectReturn", e.target.value)}/>
        </p>
        <p>
            <label>Years to Invest</label>
            <input type="number" required value={userInput.yearsInvest} onChange={(e)=>callUserInput("yearsInvest", e.target.value)}/>
        </p>
    </div>
    </section>
  )
}

export default UserInput
