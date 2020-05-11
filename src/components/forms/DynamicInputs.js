import React from 'react'


export const DynamicInput = ({ input, ...restProps }) => {
  if (input.type === "text" || input.type === "email") {
    return <TextInput input={input} {...restProps} />
  } else if (input.type === "select") {
    return <SelectInput input={input} {...restProps} />
  } else if (input.type === "textarea") {
    return <TextAreaInput input={input} {...restProps} />
  }
}

const TextInput = ({
  label = {}, // style, className, hidden, text
  name = "",
  error = {}, // isValid, message, className
  required = false,
  validation = {},
  input = {},// style, className, placeholder, type
  ...restProps
}) => {
  return <>
    <label
      htmlFor={name}
      aria-label={label.text || name}
      className={`position-relative ${label.className}`}
      style={{ ...label.style, display: !label.hidden ? "block" : "none" }}>
      {label.text}
      {/* Avoid null values for the first time so text doesn't appear on initial render */}
      {validation.isValid === false ? <small className="float-right mb-1 text-warning">{validation.message || error.message}</small> : ""}
    </label>
    {label.hidden && validation.isValid === false ? <small className="text-warning d-block mb-1">{validation.message || error.message}</small> : ""}
    <input
      {...required}
      style={{ ...input.style }}
      className={`form-control blur-no-shadow form-control-lg mb-1 ${input.className} ${validation.isValid === false ? "is-invalid was-validated" : "was-validated"} `}
      type={input.type || "text"}
      placeholder={input.placeholder}
      name={name}
      {...restProps}
    />

  </>
}


const TextAreaInput = ({
  label = {}, // style, className, hidden, text
  name = "",
  error = {}, // isValid, message, className
  required = false,
  validation = {},
  input = {},// style, className, placeholder, rows
  ...restProps
}) => {
  return <>
    <label
      htmlFor={name}
      aria-label={label.text || name}
      className={`position-relative ${label.className}`}
      style={{ ...label.style, display: !label.hidden ? "block" : "none" }}>
      {label.text}
      {/* Avoid null values for the first time so text doesn't appear on initial render */}
      {validation.isValid === false ? <small className="float-right mb-1 text-warning">{validation.message || error.message}</small> : ""}
    </label>
    {label.hidden && validation.isValid === false ? <small className="text-warning d-block mb-1">{validation.message || error.message}</small> : ""}
    <textarea
      {...required}
      style={{ ...input.style }}
      className={`form-control blur-no-shadow form-control-lg mb-1 ${input.className} ${validation.isValid === false ? "is-invalid was-validated" : "was-validated"} `}
      rows={input.rows || 4}
      placeholder={input.placeholder}
      name={name}
      {...restProps}
    />
  </>
}



const SelectInput = ({
  label = {}, // style, className, hidden, text
  name = "",
  options = [],
  error = {}, // isValid, message, className
  required = false,
  validation = {},
  input = {},// style, optionStyle, OptionClassName, className, placeholder, type
  ...restProps
}) => {
  return (
    <>
      <label
        htmlFor={name}
        aria-label={label.text || name}
        className={`position-relative ${label.className}`}
        style={{ ...label.style, display: !label.hidden ? "block" : "none" }}>
        {label.text}
        {/* Avoid null values for the first time so text doesn't appear on initial render */}
        {validation.isValid === false ? <small className="float-right mb-1 text-warning">{validation.message || error.message}</small> : ""}
      </label>
      {label.hidden && validation.isValid === false ? <small className="text-warning d-block mb-1">{validation.message || error.message}</small> : ""}
      <div
        style={{ ...input.style }}
        className={`custom-select custom-select-lg blur-no-shadow mb-1 ${input.className} ${validation.isValid === false ? "is-invalid was-validated" : "was-validated"} `}
      >
        <select
          {...required}
          type="text"
          style={{...input.style}}
          className={{...input.className}}
          placeholder={input.placeholder}
          name={`${name}`}
          {...restProps}
        >
          {options.map(option =>
            <option
              key={option.value}
              className={`${input.optionClassName}`}
              style={{ ...input.optionStyle }}
              value={option.value}>
              {option.text}
            </option>)}
        </select>
      </div>
    </>
  )
}
