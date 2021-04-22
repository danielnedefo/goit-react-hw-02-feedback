import React,{Component} from 'react';
import shortid from 'shortid'

class SignUpForm extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  countAmountOfClick = (name) => {
    this.setState(prevState => {
      const prevValue = prevState[name];
      return {
        [name]: prevValue + 1
      }
    })
  }
  countTotal = () => {
    const total = Object.values(this.state)
    const sum = total.reduce((acc, num) => acc + num, 0)
    return sum
  }
  countPositiveFeedbackPercentage = () => {
    let percentage = 0
    const good = this.state.good
    const totalSum = this.countTotal()
    percentage = Math.round(good / totalSum * 100)
    return percentage
  }
 
  render() {
   const {countAmountOfClick} = this
    const btnKeys = Object.keys(this.state)

    const Buttons = btnKeys.map((btn) => {
     return (
       <button onClick={()=>{countAmountOfClick(btn)}}  key={shortid.generate()}>{btn}</button>
    ) 
    })
    const total = this.countTotal()
    const staticSection = total ? (<>
    <h2>Statistic</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotal()}</p>
        <p>Percentage:{this.countPositiveFeedbackPercentage()}%</p>
    </>) : <p>No feedback given</p>
    return (
      <>
        <div>{Buttons}</div>
        {staticSection}
      </>
    )
  }
}
export default SignUpForm;