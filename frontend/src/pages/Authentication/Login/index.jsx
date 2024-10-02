import { HMButton, HMCheckbox, HMInput, HMPasswordInput } from "@/components";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "../Authentication.module.css";

export const Login = () => {
  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Welcome</h1>
          <p>Please login here</p>
        </div>
        <form action="" className={styles.FromWrapper}>
          <div className={styles.FormInputWrapper}>
            <HMInput label={"Email Address"} placeholder={"Enter Your Email"} />
            <HMPasswordInput
              label={"Password"}
              placeholder={"Enter Your Password"}
            />
            <div className="d-flex align-items-center justify-content-between">
              <HMCheckbox>Remember Me</HMCheckbox>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <HMButton variant={"primary"} block>
            Login
          </HMButton>
        </form>

        <p className={clsx(styles.AuthContentBottom, "text-center")}>
          You Dont&apos;t Have Acoount?&nbsp;
          <Link to={"/signup"}>Sign Up</Link>
        </p>
      </div>
    </>
  );
};
