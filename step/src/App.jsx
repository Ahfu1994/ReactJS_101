import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return <div>
    <Step />
    <StepMessage step={1}>
      <p>Pass in content</p>
      <p>👌</p>
    </StepMessage>
    <StepMessage step={2}>
      <p>Read children prop</p>
      <p>😎</p>
    </StepMessage>
  </div>

}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  const openOrClose = () => {
    setIsOpen(is => !is);
  }


  return (
    <>
      <button className="close" onClick={openOrClose}>&times;</button>
      {isOpen ? <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}> 1</div>
          <div className={step >= 2 ? "active" : ""}> 2</div>
          <div className={step >= 3 ? "active" : ""}> 3 </div>
        </div>
        <StepMessage step={step}>{messages[step - 1]}</StepMessage>
        <Button bgColor='#e7e7e7' textColor='#333' onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>Learn how</Button>
        <div className="buttons">
          <Button
            textColor={`#fff`}
            bgColor={`#7950f2`}
            onClick={handlePrevious} >
            <span>👈</span>Previous
          </Button>
          <Button
            textColor={`#fff`}
            bgColor={`#7950f2`}
            onClick={handleNext}>
            Next <span>👉</span>
          </Button>
        </div>
      </div> : ""}

    </>
  )
}
function StepMessage({ step, children }) {
  return <p className="message">
    <h3>Step {step}</h3>
    {children}
  </p>;
}
function Button({ textColor, bgColor, onClick, children }) {
  return <button style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }} onClick={onClick}>{children}</button>
}


export default App
