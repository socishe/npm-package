import React, { useState } from "react";
import validator, { determineClass } from "../Form/validator";

const FormInput = (props) => {
  const {
    name,
    required,
    label,
    type,
    placeholder,
    onChange,
    defaultValue,
  } = props;

  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);

  const onValue = (event) => {
    const target = event.currentTarget;
    const valid = required ? validator({ type, value: target.value }) : true;

    setDirty(!valid);

    if (onChange) {
      onChange({
        name,
        type,
        touched,
        dirty: !valid,
        value: target.value,
      });
    }
  };

  const onTouch = (event) => {
    const target = event.currentTarget;

    if (!touched) {
      setTouched(true);
    }

    const isDirty = required ? target.value.trim().length === 0 : false;

    setDirty(isDirty);

    if (onChange) {
      onChange({
        name,
        type,
        touched: true,
        dirty: isDirty,
        value: target.value,
      });
    }
  };

  return (
    <div
      className={`travism-input-field `.concat(determineClass({touched, dirty}))}
    >
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        onBlur={onTouch}
        onChange={onValue}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />

      {touched && dirty && (
        <div className="travism-input-error">Valid {name} is required</div>
      )}
    </div>
  );
};

export default FormInput;
