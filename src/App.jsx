import CustomForm from './components/CustomForm';
import OneThing from './components/OneThing';
import { useState } from 'react'

// js confetti 
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function getSuccessMessage() {
  const message = ["Great job!"];
  return message; 
}

function App() {
  
  const[thing,setThing] = useState("");
  const[isCompleted,setIsCompleted] = useState(true);

  const handleInput = (e) => {
    setThing(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false)
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti();
    e.target.removeAttribute('disabled');
    setThing("");
    setIsCompleted(true);
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        { isCompleted && <CustomForm thing={thing} handleInput={handleInput} handleSubmit={handleSubmit} /> }
        { !isCompleted && <OneThing thing={thing} handleCompletedThing={handleCompletedThing} /> }
      </div>
        
    </main>
  )
}

export default App
