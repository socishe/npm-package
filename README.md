# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

installed all required packages for the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to use this package

To start using the tool, it has to be feed with field data as follows:

```js
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
```

Note that you can generate different types of inputs,
1. For generic input field
    Object data has to contain, note that generic input fields can be have type of `text`, `email`, and `number`.

    ```js
    {
      type: "text", // Can be number, email, or text
      name: "name",
      label: "First Name",
      required: true, // Optional, defaults to false
      placeholder: "Enter your first name", // Optional
    },
    ```

2. To generate `checkbox`:
    Object data has to contain 
    ```js
    {
      type: "checkbox",
      label: "Select what you want?",
      required: true, // Optional, defaults to false
      name: "font types",
      options: [
        {
          value: "Roboto",
        },
        ...
      ],
    },
    ```
3. For `textarea`:
    Object data has to contain 
    ```js
    {
      type: "textarea",
      name: "special instructions",
      label: "Special Instructions",
      required: true, // Optional, defaults to false
      placeholder: "Write your special instructions...", // Optional
      defaultValue: "", // Optional
      minCharacters: 10, // Optional, default is 0
    },
    ```
4. For `radio` input field:
    Object data has to contain

    ```js
    {
      type: "radio",
      name: "languages",
      label: "Which languages do you require?",
      required: true, // Optional, defaults to false
      options: [
        {
          value: "PHP",
        },
        {
          value: "JavaScript",
        },
        ...
      ],
    },
    ```

### How to use this formData

The Form component accepts a number of props, one is for feeding in this formData:

```jsx

    import Form from travism

    return (
        <Form
            endpoint="http://localhost:3000/npm-package"
            onStatus={onValidate}
            fields={formData} // <- Form data goes in here 
            roundBorder
            btnPosition="center"
            submitBtnTxt="Submit data"
        />
    );
```

## Prop usage
* `endpoint`: Accepts an endpoint to submit the form
* `onStatus`: Return current status of the form, either, dirty or clean.
* `fields`: Data used to render different input fields of the form.
* `roundBorder`: It's a boolean, whether want the input fields to have some border radius, defaults to false.
* `btnPosition`: Position of the submit button, whether to be centered, etc. Options are `center`, `right` and `left`, default is `right`.
* `submitBtnTxt`: Allows you to change the text written on the submit button, default is `Submit form`.

### To Do
* Add more customizable options to the component
