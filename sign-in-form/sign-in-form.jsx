import { useState, useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import FormInput from "../form-input/form-input";
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      alert("Successfully signed in!");
    } catch (error) {
      alert(error.message);
    }
    setFormFields({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="sign-in-container">
      <h2>Already Have an Account?</h2>
      <span>SignIn with Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
