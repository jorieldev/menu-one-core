import { updateMenu } from "./components/Menu/index.js";
import { updateMenuHeader } from "./sections/index.js";
import IconsComponentHtml from "./components/Icons/index.js";
import menuHeaderComponent from "./components/MenuHeader/index.js";
function constructorElements() {
  class IconsComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      let attributes = {};
      this.hasAttribute("name")
        ? (attributes.name = this.getAttribute("name"))
        : "";
      this.hasAttribute("className")
        ? (attributes.className = this.getAttribute("className"))
        : "";
      this.hasAttribute("id") ? (attributes.id = this.getAttribute("id")) : "";
      this.innerHTML = IconsComponentHtml(attributes);
    }
  }
  class MenuHeaderComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      let attributes = {};
      this.hasAttribute("name")
        ? (attributes.name = this.getAttribute("name"))
        : "";
      this.innerHTML = menuHeaderComponent(attributes);
    }
  }
  customElements.define("icons-element", IconsComponent);
  customElements.define("menu-header", MenuHeaderComponent);
}

//// RENDER MENU
export const showHeaderMenuBar = async () => {
  /// Used only for testing DATAMENU
  const dataMenu = [
    {
      name: "logoOneCoreShort",
    },
    {
      name: "logoOneCore",
    },
    {
      name: "dividerTop",
    },
    {
      name: "avatar",
      image:
        "https://res.cloudinary.com/joriel/image/upload/v1677032576/qmsfvshattwpzw1tawk7.png",
      button: {
        text: "Nombre de la empresa",
        href: "#",
      },
    },
    {
      name: "securitySearch",
      className: "top-icon",
      button: {
        text: "Safe",
        href: "#",
      },
    },
    {
      name: "sheetEmpty",
      button: {
        text: "Files",
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
            href: "#",
          },
        ],
      },
    },
    {
      name: "file",
      button: {
        text: "Catálogos Safe",
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
            href: "#",
          },
        ],
      },
    },
    {
      name: "fileWarning",
      button: {
        text: "Reportes",
      },
    },
    {
      name: "bookOpen",
      button: {
        text: "Compulsas",
      },
    },
    {
      name: "sheet",
      button: {
        text: "Informe Auditoría",
      },
    },
    {
      name: "sheetOk",
      button: {
        text: "Números Parte",
      },
    },
    {
      name: "dividerBottom",
    },
    {
      name: "userAvatar",
      button: {
        text: "Mi perfil",
        list: [
          {
            text: "Lorem Ipum",
            href: "#",
          },
          {
            text: "Lorem Ipum",
            href: "#",
          },
        ],
      },
    },
    {
      name: "security",
      button: {
        text: "Seguridad",
      },
    },
    {
      name: "config",

      button: {
        text: "Configuraciones",
      },
    },
    {
      name: "help",
      button: {
        text: "Soporte",
      },
    },
    {
      name: "exit",
      button: {
        text: "Cerrar Sesión",
      },
    },
  ];
  const urlEndpoint = "http://";
  let dataMenuBar = {};
  try {
    const data = await fetch(urlEndpoint);
    if (!data.ok) {
      throw new Error("Error en la solicitud");
    }
    // dataMenuBar = await data.json();
    dataMenuBar = dataMenu;
  } catch (error) {
    console.error(error);
    dataMenuBar = dataMenu; /// Used only for testing
  }
  updateMenu(dataMenuBar);
};

// DATA SEARCH CLIENT
export const showHeaderSearch = async () => {
  /// Used only for testing DATAMENU
  const dataMenu = {
    id: "headerInputs",
    title: "Cliente",
    list: [
      {
        id: "id",
        title:
          "LOREM IMPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IP",
      },
      {
        id: "id2",
        title:
          "LOREM IMPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IP",
      },
      {
        id: "id3",
        title:
          "LOREM IMPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IP",
      },
    ],
  };
  const urlEndpoint = "http://";
  let dataMenuSearch = {};
  try {
    const data = await fetch(urlEndpoint);
    if (!data.ok) {
      throw new Error("Error en la solicitud");
    }
    // dataMenuSearch = await data.json();
    dataMenuSearch = dataMenu;
  } catch (error) {
    console.error(error);
    dataMenuSearch = dataMenu; /// Used only for testing
  }
  updateMenuHeader(dataMenuSearch);
};

/// CONFIGS BEGIN ///
constructorElements();
showHeaderMenuBar();
showHeaderSearch();
/// CONFIGS END ///

/// CHANGE RENDER BUTTON // SEARCH DATA
const searchParamsFilters = async (url, additionalInformation) => {
  try {
    const dataResponse = await getData(url, additionalInformation);
  } catch (e) {
    console.log(e);
  }
};

async function getData(url, additionalInformation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("RELOAD");
    }, 1000);
  });
}

export { searchParamsFilters };
