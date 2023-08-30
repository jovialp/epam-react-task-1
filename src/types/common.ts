import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export type LoginFormValuesType = {
  username: string;
  password: string;
};

export interface LoginFormProps extends Props {
  handleSubmit: (values: LoginFormValuesType) => void;
  title: string;
}
