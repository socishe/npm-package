import React, { useEffect, useState } from "react";
import { determineClass } from "../Form/validator";

const FormCheckbox = (props) => {
  const { label, required, type, options, name, onChange } = props;

  const [stateOptions, setStateOptions] = useState([]);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);

  useEffect(() => {
    if (Array.isArray(options)) {
      const modify = options.map((option) => {
        return {
          ...option,
          checked: false,
        };
      });

      setStateOptions(modify);
    }
  }, [options]);

  const onValue = (event) => {
    const target = event.currentTarget;

    if (!touched) {
      setTouched(true);
    }

    let valid = false;
    const selectedData = [];

    const modify = stateOptions.map((option) => {
      let valChecked = option.checked;

      if (option.value.toLowerCase() === target.value.toLowerCase()) {
        valChecked = target.checked;

        if (target.checked) {
          valid = true;
          selectedData.push(target.value);
        }
      } else if (valChecked) {
        valid = true;
        selectedData.push(option.value);
      }

      return {
        ...option,
        checked: valChecked,
      };
    });

    setStateOptions(modify);

    setDirty(!valid);

    if (onChange) {
      onChange({
        name,
        type,
        touched: true,
        dirty: !valid,
        value: selectedData,
      });
    }
  };

  return (
    <>
      {stateOptions.length !== 0 && (
        <div
          className={`travism-input-field `.concat(
            determineClass({ touched, dirty })
          )}
        >
          <fieldset className="input-radio">
            <legend>
              {label} {required && <span>*</span>}
            </legend>
            <div>
              {stateOptions.map((option, index) => {
                return (
                  <div key={`${index}_checkbox_options`}>
                    <label className="choice">
                      <input
                        type="checkbox"
                        defaultChecked={option.checked}
                        name={option.value}
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

export default FormCheckbox;
