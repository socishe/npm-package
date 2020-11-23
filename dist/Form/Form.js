import React, { Fragment, useEffect, useState } from "react";
import "./Form.scss";
import { FormCheckbox, FormInput, FormRadio, FormTextarea } from "../composition";
import axios from "axios";

const Form = props => {
  const {
    roundBorder,
    fields,
    endpoint,
    onStatus,
    btnPosition,
    submitBtnTxt
  } = props;
  const [styles, setStyles] = useState({});
  const [data, setData] = useState([]);
  const [clean, setClean] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const modify = fields.map(field => {
      let touched = true;
      let dirty = false;

      if (typeof field.required !== "undefined") {
        touched = field.required === true ? false : true;
        dirty = field.required;
      }

      return { ...field,
        touched,
        dirty
      };
    });
    setData(modify);
  }, [fields]);
  useEffect(() => {
    let classes = "";

    if (roundBorder) {
      classes += " curvey";
    }

    setStyles(classes);
  }, [roundBorder]);

  const onFormChange = event => {
    let countClean = 0;
    const modify = data.map(dataValue => {
      let val = dataValue;

      if (dataValue.name === event.name) {
        if (event.touched && !event.dirty) {
          countClean += 1;
        }

        return { ...val,
          dirty: event.dirty,
          touched: event.touched,
          data: event.value
        };
      }

      if (val.touched && !val.dirty) {
        countClean += 1;
      }

      return val;
    });
    let allClean = false;

    if (countClean === modify.length) {
      allClean = true;
    }

    setClean(allClean);
    if (onStatus) onStatus(allClean);
    setData(modify);
  };

  const extractData = inputData => {
    const formData = {};
    inputData.forEach(val => {
      if (!val.dirty && typeof val.data !== "undefined") {
        formData[val.name.replace(" ", "_")] = val.data;
      }
    });
    return formData;
  };

  const onSubmitFn = event => {
    event.preventDefault();
    setSubmitting(true);
    const form = extractData(data);
    axios.post(endpoint, form).then(response => {
      console.log(response);
      setSubmitting(false);
    }).catch(error => {
      console.error(error);
      setSubmitting(false);
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: `travism-form `.concat(styles)
  }, /*#__PURE__*/React.createElement("form", {
    noValidate: true,
    onSubmit: onSubmitFn
  }, fields.length === 0 && "Please add form input options", fields.map((field, index) => {
    const type = field.type ? field.type.toLowerCase() : "";
    return /*#__PURE__*/React.createElement(Fragment, {
      key: `${index}_input_options`
    }, !["radio", "checkbox", "textarea"].includes(type) && /*#__PURE__*/React.createElement(FormInput, {
      name: field.name || "",
      type: type || "text",
      onChange: onFormChange,
      label: field.label || "",
      required: field.required || false,
      placeholder: field.placeholder || ""
    }), type === "radio" && /*#__PURE__*/React.createElement(FormRadio, {
      name: field.name,
      label: field.label,
      type: type,
      required: field.required || false,
      options: field.options,
      onChange: onFormChange
    }), type === "checkbox" && /*#__PURE__*/React.createElement(FormCheckbox, {
      name: field.name,
      label: field.label,
      type: type,
      required: field.required || false,
      options: field.options,
      onChange: onFormChange
    }), type === "textarea" && /*#__PURE__*/React.createElement(FormTextarea, {
      name: field.name,
      label: field.label,
      type: type,
      required: field.required || false,
      placeholder: field.placeholder || "",
      defaultValue: field.value,
      onChange: onFormChange,
      minCharacters: field.minCharacters || null
    }));
  }), fields.length !== 0 && /*#__PURE__*/React.createElement("div", {
    className: `form-footer `.concat(btnPosition || "right")
  }, /*#__PURE__*/React.createElement("button", {
    className: "form-submit",
    type: "submit",
    disabled: !clean || submitting
  }, !submitting && /*#__PURE__*/React.createElement(React.Fragment, null, submitBtnTxt || "Submit Form"), submitting && "Submitting..."))));
};

export default Form;