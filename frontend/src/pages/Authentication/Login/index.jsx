import { HMButton, HMCheckbox, HMInput, HMPasswordInput } from "@/components";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "../Authentication.module.css";
import LoginHook from "@/hooks/Login/login.hook";

export const Login = () => {
  const {
    errors,
    rememberMe,
    loading,
    credentials,
    handleChange,
    setRememberMe,
    handleSubmit,
  } = LoginHook();

  return (
    <>
      <div className="w-100"></div>
      <div className="w-100">
        <div className={styles.AuthContentWrapper}>
          <h1 className="fw-semibold">Welcome</h1>
          <p>Please login here</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.FromWrapper}>
          <div className={styles.FormInputWrapper}>
            <HMInput
              label={"Email Address"}
              placeholder={"Enter Your Email"}
              name="email"
              value={credentials.email}
              onChange={handleChange}
              error={errors.email}
            />
            <HMPasswordInput
              label={"Password"}
              placeholder={"Enter Your Password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              error={errors.password}
            />
            <div className="d-flex align-items-center justify-content-between">
              <HMCheckbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              >
                Remember Me
              </HMCheckbox>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <HMButton
            variant={"primary"}
            block
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Login
          </HMButton>
        </form>

        <p className={clsx(styles.AuthContentBottom, "text-center")}>
          You Don&apos;t Have an Account?&nbsp;
          <Link to={"/signup"}>Sign Up</Link>
        </p>
      </div>
    </>
  );
};
