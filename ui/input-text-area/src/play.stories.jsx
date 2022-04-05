import * as React from "react";
import { InputTextArea as Component } from "./";

export default {
  title: "InputTextArea",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Play = Template.bind({});

Play.storyName = "InputTextArea";

Play.args = {
  canResize: false,
  name: "text-area-1",
  id: "text-area-1",
  label: "Label",
};

export const Error = Template.bind({});

Error.args = {
  canResize: false,
  name: "text-area-2",
  id: "text-area-2",
  label: "Label",
  state: "error",
};
