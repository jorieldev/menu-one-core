import createSvg from "./icons/files.js";
import { createList } from "./List/index.js";

function useState(defaultValue) {
  let value = defaultValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  return [getValue, setValue];
}
document.body.addEventListener("click", function (e) {
  const nameOption = e?.target?.id || e?.target?.getAttribute("name");
  const updateMenu = document.getElementsByClassName("active");
  for (let i = 0; i < updateMenu?.length; i++) {
    const element = updateMenu[i];
    if (element?.children[0]?.id !== nameOption)
      element.classList.remove("active");
  }
  const searchByName = document?.getElementById(nameOption)?.parentElement;
  if (searchByName) {
    searchByName.classList.toggle("active");
  }
});

const classNameIcon = {
  logoOneCoreShort: "container-menu-logo",
  logoOneCore: "container-menu-logo-full",
  dividerTop: "divider-top",
  avatar: "top-avatar",
  securitySearch: "top-icon",
  sheetEmpty: "top-icon",
  file: "top-icon",
  fileWarning: "top-icon",
  bookOpen: "top-icon",
  sheet: "top-icon",
  sheetOk: "top-icon",
  dividerBottom: "divider-bottom",
  userAvatar: "bottom-icon",
  security: "bottom-icon",
  help: "bottom-icon",
  exit: "bottom-icon",
  config: "bottom-icon",
};

const MenuMobileComponentHtml = () => {
  const containerMobile = document.createElement("div");
  containerMobile.innerHTML = `
  <div class="menu-hamburguer">
  ${createSvg({ name: "menuHamburguer", className: "menu-hamburguer" })}
  </div>
  <div class="logo-one-core-short" >
  ${createSvg({ name: "logoOneCoreShort", className: "logo-one-core-short" })}
  </div>
  `;
  return containerMobile;
};

const MenuComponentHtml = (dataMenu) => {
  const divElement = document.createElement("div");
  divElement.id = "container-menu";
  dataMenu?.forEach((element) => {
    const containerListAndIcon = document.createElement("div");
    const elementIcon = document.createElement("div");
    const { name, image, button, width, height } = element;
    const className = classNameIcon[`${name}`]
      ? classNameIcon[`${name}`]
      : "top-icon";
    elementIcon.className = className;
    elementIcon.innerHTML = createSvg({
      name,
      image,
      className,
      button,
      width,
      height,
      id: `${name}-MENU-LIST`,
    });
    elementIcon.id = `${name}-MENU-LIST`;
    if (button?.list) {
      containerListAndIcon.className = "menu-list";
      containerListAndIcon.appendChild(elementIcon);
      const list = document.createElement("ol");
      list.innerHTML = createList({ dataMenu: dataMenu, nameOption: name });
      list.id = `${name}-ol`;
      list.className = `${name}-ol`;
      containerListAndIcon.appendChild(list);
      divElement.appendChild(containerListAndIcon);
    } else {
      divElement.appendChild(elementIcon);
    }
  });
  return divElement;
};

export { MenuComponentHtml, MenuMobileComponentHtml };
