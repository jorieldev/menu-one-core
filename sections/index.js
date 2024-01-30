import { MockupUpdate } from "./MockupUpdate.js";
import menuHeaderComponent from "../components/MenuHeader/index.js";

export const renderSection = () => {
  const stylesRoot = document.getElementById("root-styles");
  stylesRoot.innerHTML += stylesSections();
};

export const showHeaderMenu = async () => {
  const urlEndpoint = "http://";
  let dataHeaderMenu = {};
  try {
    const data = await fetch(urlEndpoint);
    if (!data.ok) {
      throw new Error("Error en la solicitud");
    }
    // dataHeaderMenu = await data.json();
    dataHeaderMenu = MockupUpdate().data.header;
    updateHeaderInputAndDropdown(dataHeaderMenu);
  } catch (error) {
    console.error(error);
    dataHeaderMenu = MockupUpdate().data.header;
    updateHeaderInputAndDropdown(dataHeaderMenu);
  }
};

export const updateMenuHeader = (data) => {
  const containerMenuHeader = document.querySelector("menu-header");
  containerMenuHeader.innerHTML = menuHeaderComponent(data);
};
