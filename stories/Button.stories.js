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
  // You can either use a function to create DOM elements or use a plain html string!
  //return `<button class="usa-button ">${label}</button>`;
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
