
import React from 'react'
import Inputs from '../composition/Inputs'
import Radio from '../composition/Radio'
import Checkbox from '../composition/Checkbox'
import Picker from '../composition/Picker'

const Form = (props) => {

    
    return (
        <div>
            <form >
            
            {props.inputs? <Inputs />: "" }
            {props.radio ? <Radio />: ""}
            {props.checkbox ? <Checkbox />: ""}
            {props.picker ? <Picker />: ""}
            {(() => {
                if (props.inputs)
                    return <span><button type="submit">Submit Booking</button></span>
                if (props.radio)
                    return <span><button type="submit">Submit Booking</button></span>
                if (props.checkbox)
                    return <span>T<button type="submit">Submit Booking</button></span>
                if(props.picker)
                    return <span><button type="submit">Submit Booking</button></span>
            })()}</form>
        </div>
    )
}

export default Form
