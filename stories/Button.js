import "./button.scss";
//import USWDS from "../node_modules/uswds/src/js/components";
//const { button } = USWDS;

export const createButton = ({ mode = primary, label, onClick }) => {
  const states = ["normal", "hover", "active", "disabled"];

  let bgroup = document.createElement("ul");
  bgroup.className = `usa-button-group`;
  let buttonGroup = states.map((s) => {
    let lst = document.createElement("li");
    const btn = document.createElement("button");

    btn.type = "button";
    btn.addEventListener("click", onClick);

    switch (s) {
      case "normal":
        btn.innerText = label;
        btn.className = `usa-button usa-button--${mode}`;
        break;
      case "hover":
        btn.innerText = "Hover State";
        btn.className = `usa-button usa-button--${mode} usa-button--hover`;
        break;
      case "active":
        btn.innerText = "Active State";
        btn.className = `usa-button usa-button--${mode} usa-button--active`;
        break;
      case "disabled":
        btn.innerText = "Disabled Button";
        btn.className = `usa-button usa-button--${mode} usa-button--disabled`;
        break;
      default:
        btn.className = `usa-button`;
    }

    lst.appendChild(btn);
    return lst;
  });

  for (let i = 0; i < buttonGroup.length; i++) {
    bgroup.appendChild(buttonGroup[i]);
  }

  return bgroup;
};
