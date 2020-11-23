import React, { useState } from "react";
import validator, { determineClass } from "../Form/validator";

const FormInput = props => {
  const {
    name,
    required,
    label,
    type,
    placeholder,
    onChange,
    defaultValue
  } = props;
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);

  const onValue = event => {
    const target = event.currentTarget;
    const valid = required ? validator({
      type,
      value: target.value
    }) : true;
    setDirty(!valid);

    if (onChange) {
      onChange({
        name,
        type,
        touched,
        dirty: !valid,
        value: target.value
      });
    }
  };

  const onTouch = event => {
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
        value: target.value
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: `travism-input-field `.concat(determineClass({
      touched,
      dirty
    }))
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label, " ", required && /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("input", {
    type: type || "text",
    name: name,
    id: name,
    onBlur: onTouch,
    onChange: onValue,
    required: required,
    defaultValue: defaultValue,
    placeholder: placeholder
  }), touched && dirty && /*#__PURE__*/React.createElement("div", {
    className: "travism-input-error"
  }, "Valid ", name, " is required"));
};

export default FormInput;