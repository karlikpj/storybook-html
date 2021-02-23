import "./button.scss";
//import USWDS from "../node_modules/uswds/src/js/components";
//const { button } = USWDS;

export const createButton = ({ mode = primary, label, onClick }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  btn.className = `usa-button usa-button--${mode}`;

  return btn;
};
