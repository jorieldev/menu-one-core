export const createList = ({ nameOption, dataMenu }) => {
  const divElement2 = document.createElement("ol");
  let listOrder = "";
  dataMenu
    ?.filter(({ name }) => name === nameOption)[0]
    ?.button?.list?.map((element) => {
      listOrder += `<li><a href=${element.href}>${element.text}</a></li>`;
    });
  return (divElement2.innerHTML = listOrder);
};
