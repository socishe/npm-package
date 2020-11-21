import React from 'react'

const Checkbox = () => {
    return (
        <div>
            <fieldset>
              <legend>Extras</legend>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="extras"
                    value="baby"
                  />{" "}
                  Baby Seat{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="extras"
                    value="wheelchair"
                  />{" "}
                  Wheelchair Access{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="extras"
                    value="tip"
                  />{" "}
                  Stock Tip{" "}
                </label>
              </p>
              <label className="error">
              </label>
            </fieldset>
        </div>
    )
}

export default Checkbox
