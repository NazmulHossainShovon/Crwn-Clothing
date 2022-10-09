import SignUpForm from "../../sign-up-form/sign-up-form.jsx";
import SignInForm from "../../sign-in-form/sign-in-form.jsx";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
