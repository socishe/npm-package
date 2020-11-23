import React, { useEffect, useState } from "react";
import validator, { determineClass } from "../Form/validator";

const FormRadio = props => {
  const {
    label,
    required,
    name,
    options,
    onChange
  } = props;
  const [stateOptions, setStateOptions] = useState([]);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);
  const type = "radio";
  useEffect(() => {
    if (Array.isArray(options)) {
      setStateOptions(options || []);
    }
  }, [options]);

  const onValue = event => {
    const target = event.currentTarget;
    const valid = required ? validator({
      type: "text",
      value: target.value
    }) : true;

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
        value: target.value
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, stateOptions.length !== 0 && /*#__PURE__*/React.createElement("div", {
    className: `travism-input-field `.concat(determineClass({
      touched,
      dirty
    }))
  }, /*#__PURE__*/React.createElement("fieldset", {
    className: "input-radio"
  }, /*#__PURE__*/React.createElement("legend", null, label, " ", required && /*#__PURE__*/React.createElement("span", null, "*")), /*#__PURE__*/React.createElement("div", null, stateOptions.map((option, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: `${index}_radio_options`
    }, /*#__PURE__*/React.createElement("label", {
      className: "choice"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      required: required,
      name: name,
      value: option.value,
      onChange: onValue
    }), ` ${option.value}`));
  }))), touched && dirty && /*#__PURE__*/React.createElement("div", {
    className: "travism-input-error"
  }, "Valid ", name, " is required")));
};

export default FormRadio;