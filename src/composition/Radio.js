import React from 'react'

const Radio = () => {
    return (
        <div>
            <fieldset>
              <legend>Which taxi do you require?</legend>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="taxi"
                   
                    value="car"
                  />{" "}
                  Car{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="taxi"
                    value="van"
                  />{" "}
                  Van{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="radio"
                    name="taxi"
                    value="tuk tuk"
                  />{" "}
                  Tuk Tuk{" "}
                </label>
              </p>
              <label className="error">
              </label>
            </fieldset>
        </div>
    )
}

export default Radio
