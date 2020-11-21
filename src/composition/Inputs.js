import React from 'react'

const Inputs = () => {
    return (
        <div>
            <p>
              <label>
                Name
                <input
                  type="text"
                  name="customer_name"
                  
                />
              </label>
              <label className="error">
            
              </label>
            </p>

            <p>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone_number"
                />
              </label>
              <label className="error">
              
              </label>
            </p>

            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email_address"
                />
              </label>
              <label className="error">
              </label>
            </p>
        </div>
    )
}

export default Inputs
