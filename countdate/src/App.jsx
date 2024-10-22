import { useState } from 'react'


function App() {

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepIncress = () => {
    setStep(step => step + 1);
  }
  const stepDecress = () => {
    setStep(step => step - 1);
  }

  const countIncress = () => {
    setCount(count => count + step);
  }
  const countDecress = () => {
    setCount(count => count - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={stepDecress}>-</button>&nbsp;
        <span>Step : {step}</span>
        &nbsp;<button onClick={stepIncress}>+</button>
      </div>
      &nbsp;
      <div>
        <button onClick={countDecress}>-</button>&nbsp;
        <span>Count : {count}</span>
        &nbsp;<button onClick={countIncress}>+</button>
      </div>
      &nbsp;
      <div>
        <span>{count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  )
}

export default App
