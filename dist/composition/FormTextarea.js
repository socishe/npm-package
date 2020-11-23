import React, { useState } from "react";
import validator, { determineClass } from "../Form/validator";

const FormTextarea = props => {
  const {
    defaultValue,
    name,
    required,
    label,
    type,
    placeholder,
    onChange,
    minCharacters
  } = props;
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);
  const [charCount, setCharCount] = useState(0);

  const onValue = event => {
    const target = event.currentTarget;
    const valid = required ? validator({
      type: "text",
      value: target.value,
      minChar: minCharacters
    }) : true;
    const splitStr = target.value.trim().split(" ");
    let strLength = 0;

    if (splitStr.length === 1) {
      strLength = splitStr[0] === "" ? 0 : 1;
    } else {
      strLength = splitStr.length;
    }

    setCharCount(strLength);
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

    let isDirty = false;

    if (required) {
      if (minCharacters && minCharacters.length !== 0 && target.value.trim().length < minCharacters) {
        isDirty = true;
      }

      if (target.value.trim().length === 0) {
        isDirty = true;
      }
    }

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
  }, label, " ", required && /*#__PURE__*/React.createElement("span", null, "*"), " ", ` (${charCount} of ${minCharacters} words)`), /*#__PURE__*/React.createElement("textarea", {
    onChange: onValue,
    onBlur: onTouch,
    name: name,
    id: name,
    required: required,
    placeholder: placeholder,
    defaultValue: defaultValue
  }), touched && dirty && /*#__PURE__*/React.createElement("div", {
    className: "travism-input-error"
  }, "Valid ", name, " is required"));
};

export default FormTextarea;