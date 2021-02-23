import { createButton } from "./Button";

export default {
  title: "Example/Button",
  argTypes: {
    label: { control: "text" },
    mode: {
      control: {
        type: "select",
        options: ["primary", "secondary", "disabled"],
      },
    },
    onClick: { action: "onClick" },
  },
};

const Template = ({ label, ...args }) => {
  // Code template to cut and copy etc - blah blah..
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  label: "Secondary Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  mode: "disabled",
  label: "Disabled Button",
};
