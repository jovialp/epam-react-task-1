import React, { FormEvent } from "react";

// Types
import { LoginFormProps } from "../../types/common";

const LoginForm = (props: LoginFormProps) => {
  const handleSubmitLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    props.handleSubmit({
      username: username.value || "",
      password: password.value || ""
    });
  };
  return (
    <>
      <h3>{props.title}</h3>
      <form onSubmit={handleSubmitLoginForm}>
        <input type="text" id="username" placeholder="Username" />

        <input type="password" id="password" placeholder="Password" />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;
