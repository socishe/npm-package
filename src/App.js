import React from "react";
import "./App.scss";
import Form from "./components/Form";

const App = () => {
  const formData = [
    {
      type: "text",
      name: "name",
      label: "First Name",
      required: true,
      placeholder: "Enter your first name",
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      required: false,
      placeholder: "Enter your email address",
    },
    {
      type: "radio",
      name: "languages",
      label: "Which languages do you require?",
      required: true,
      options: [
        {
          value: "PHP",
        },
        {
          value: "JavaScript",
        },
        {
          value: "Java",
        },
      ],
    },
    {
      type: "checkbox",
      label: "Select what you want?",
      required: true,
      name: "font types",
      options: [
        {
          value: "Roboto",
        },
        {
          value: "Castoro",
        },
        {
          value: "Open Sans",
        },
      ],
    },
    {
      type: "textarea",
      name: "special instructions",
      label: "Special Instructions",
      required: true,
      placeholder: "Write your special instructions...",
      defaultValue:
        "This is a real test write now, but when things start to get fun, that's when you change things.",
      minCharacters: 10,
    },
  ];

  const onValidate = (formStatus) => {
    console.log(`Form is ${formStatus ? "Clean" : "Dirty"}`);
  };

  return (
    <div className="main-container">
      <div className="header">Form builder package</div>
      <div className="form-container">
        <Form
          endpoint="http://localhost:3000/npm-package"
          onStatus={onValidate}
          fields={formData}
          roundBorder
          btnPosition="center"
          submitBtnTxt="Submit data"
        />
      </div>
    </div>
  );
};

export default App;
