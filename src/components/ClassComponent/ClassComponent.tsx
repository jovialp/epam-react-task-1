import React, { Component } from "react";

// Types
import { Props } from "../../types/common";

export default class ClassComponent extends Component<Props> {
  render() {
    return <>{this.props?.children}</>;
  }
}
