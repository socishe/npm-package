import React, { useEffect, useState } from "react";
import { determineClass } from "../Form/validator";

const FormCheckbox = props => {
  const {
    label,
    required,
    type,
    options,
    name,
    onChange
  } = props;
  const [stateOptions, setStateOptions] = useState([]);
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(true);
  useEffect(() => {
    if (Array.isArray(options)) {
      const modify = options.map(option => {
        return { ...option,
          checked: false
        };
      });
      setStateOptions(modify);
    }
  }, [options]);

  const onValue = event => {
    const target = event.currentTarget;

    if (!touched) {
      setTouched(true);
    }

    let valid = false;
    const selectedData = [];
    const modify = stateOptions.map(option => {
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

      return { ...option,
        checked: valChecked
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
        value: selectedData
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
      key: `${index}_checkbox_options`
    }, /*#__PURE__*/React.createElement("label", {
      className: "choice"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      defaultChecked: option.checked,
      name: option.value,
      value: option.value,
      onChange: onValue
    }), ` ${option.value}`));
  }))), touched && dirty && /*#__PURE__*/React.createElement("div", {
    className: "travism-input-error"
  }, "Valid ", name, " is required")));
};

export default FormCheckbox;