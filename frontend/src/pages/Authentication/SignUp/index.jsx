import { HMButton, HMCheckbox, HMInput, HMPasswordInput } from "@/components";
import { Link } from "react-router-dom";
import clsx from "clsx";
import SignupHook from "@/hooks/User/signupUser.hook";
import styles from "../Authentication.module.css";

export const SignUp = () => {
  const { errors, buttonLoader, formData, handleInputChange, handleSubmit } =
    SignupHook();
  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Sign Up</h1>
          <p>Please Signup Here</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.FromWrapper}>
          <div className={styles.FormInputWrapper}>
            <HMInput
              label={"Name"}
              placeholder={"Enter Your Name"}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              errorMessage={errors}
            />
            <HMInput
              label={"Email Address"}
              placeholder={"Enter Your Email"}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              errorMessage={errors}
            />
            <HMPasswordInput
              label={"Password"}
              placeholder={"Enter Your Password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              errorMessage={errors}
            />
            <HMPasswordInput
              label={"Confirm Password"}
              placeholder={"Enter Your Re-Password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              errorMessage={errors}
            />
            <HMCheckbox
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            >
              I agree to all the <Link to="#">Terms</Link> and{" "}
              <Link to="#">Privacy Policies</Link>
            </HMCheckbox>
          </div>

          <HMButton
            loading={buttonLoader}
            type="submit"
            variant={"primary"}
            block
          >
            SignUp
          </HMButton>
        </form>

        <p className={clsx(styles.AuthContentBottom, "text-center")}>
          Already Have Account?&nbsp;<Link to={"/login"}>Login</Link>
        </p>
      </div>
    </>
  );
};
