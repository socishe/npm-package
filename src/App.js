import React from 'react'
import useToggle from "./hooks/useToggle";
import Form from './components/Form'

const App = () => {
  const [isInputs, toggleIsInputs] = useToggle(false);
  const [isRadio, toggleIsRadio] = useToggle(false);
  const [isCheckbox, toggleIsCheckbox] = useToggle(false);
  const [isPicker, toggleIsPicker] = useToggle(false);
 
  return (

      <div>
        {!isInputs? <button onClick={toggleIsInputs}> Add Inputs </button>: <button onClick={toggleIsInputs}> Remove Inputs </button>}
        {!isRadio? <button onClick={toggleIsRadio}> Add Radio </button>: <button onClick={toggleIsRadio}> Remove Radio </button>}
        {!isCheckbox? <button onClick={toggleIsCheckbox}> Add Checkbox </button>: <button onClick={toggleIsCheckbox}> Remove Checkbox </button>}
        {!isPicker? <button onClick={toggleIsPicker}> Add Pickers </button>: <button onClick={toggleIsPicker}> Remove Pickers </button>}
        <Form inputs={isInputs} radio={isRadio} checkbox={isCheckbox} picker={isPicker} />
      </div>
  )
}

export default App
