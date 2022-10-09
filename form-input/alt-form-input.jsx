import { useState } from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  const [labelStyle, setLabelStyle] = useState("");
  const changeLabel = () => {
    setLabelStyle("shrink");
  };
  const unChangeLabel = () => {
    if (!otherProps.value) {
      setLabelStyle("");
    }
  };
  return (
    <div className="group">
      <label className={`${labelStyle} form-input-label`}> {label} </label>
      <input
        className="form-input"
        onBlur={unChangeLabel}
        onClick={changeLabel}
        {...otherProps}
        required
      />
    </div>
  );
};
export default FormInput;
