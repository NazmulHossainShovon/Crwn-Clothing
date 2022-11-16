import { useState } from "react";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import "./sign-up-form.style.scss";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      alert(error.message);
    }
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account?</h2>
      <span>Signup with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          type="text"
        />
        <FormInput
          label="Email"
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
        />
        <FormInput
          label="Password"
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          type="password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
