import "./form-input.css";
const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <div className="container">
      <label htmlFor={id}>{labelName}</label>
      <input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
