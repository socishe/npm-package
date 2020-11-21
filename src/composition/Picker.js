import React from 'react'

const Picker = () => {
    return (
        <div>
            <p>
              <label>
                Pickup Date
                <input
                  type="date"
                  name="pickup_time"
                />
              </label>
              <label className="error">
               
              </label>
            </p>

            <p>
              <label>
                Pickup Place
                <select
                  id="pickup_place"
                  name="pickup_place"
                >
                  <option value="">Select One</option>
                  <option value="office">Taxi Office</option>
                  <option value="town_hall">Town Hall</option>
                  <option value="telepathy">We'll Guess!</option>
                </select>
              </label>
              <label className="error">
                
              </label>
            </p>

            <p>
              <label>
                Dropoff Place
                <input
                  type="text"
                  name="dropoff_place"
                />
              </label>

              <datalist id="destinations">
                <option value="Airport" />
                <option value="Beach" />
                <option value="Fred Flinstone's House" />
              </datalist>
              <label className="error">
                
              </label>
            </p>

            <p>
              <label>
                Special Instructions
                <textarea
                ></textarea>
              </label>
              <label className="error">
             
              </label>
            </p>
        </div>
    )
}

export default Picker
