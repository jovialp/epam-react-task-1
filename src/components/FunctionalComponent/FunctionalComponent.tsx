import React from "react";

// Types
import { Props } from "../../types/common";

const FunctionalComponent = (props: Props) => {
  return <>{props?.children}</>;
};

export default FunctionalComponent;
