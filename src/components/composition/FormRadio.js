import React, { useEffect, useState } from "react";
import validator, { determineClass } from "../Form/validator";

const FormRadio = (props) => {
  const { label, required, name, options, onChange } = props;

  const [stateOptions, setStateOptions] = useState([]);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);

  const type = "radio";

  useEffect(() => {
    if (Array.isArray(options)) {
      setStateOptions(options || []);
    }
  }, [options]);

  const onValue = (event) => {
    const target = event.currentTarget;
    const valid = required
      ? validator({ type: "text", value: target.value })
      : true;

    if (!touched) {
      setTouched(true);
    }

    setDirty(!valid);

    if (onChange) {
      onChange({
        name,
        type,
        touched: true,
        dirty: !valid,
        value: target.value,
      });
    }
  };

  return (
    <>
      {stateOptions.length !== 0 && (
        <div
          className={`travism-input-field `.concat(determineClass({touched, dirty}))}
        >
          <fieldset className="input-radio">
            <legend>
              {label} {required && <span>*</span>}
            </legend>
            <div>
              {stateOptions.map((option, index) => {
                return (
                  <div key={`${index}_radio_options`}>
                    <label className="choice">
                      <input
                        type="radio"
                        required={required}
                        name={name}
                        value={option.value}
                        onChange={onValue}
                      />
                      {` ${option.value}`}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>

          {touched && dirty && (
            <div className="travism-input-error">Valid {name} is required</div>
          )}
        </div>
      )}
    </>
  );
};

export default FormRadio;
