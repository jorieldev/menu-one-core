import { searchParamsFilters } from "../../main.js";

const validateValue = (value) => {
  return value !== "";
};
document.body.addEventListener("click", function (event) {
  const updateCard = document.getElementById("list-header-dropdown");
  const updateAllCard = document.getElementsByClassName("show-header-search");
  const changeIcon = document.getElementsByClassName("menu-header-container");
  const searchIcon = changeIcon[0].getElementsByClassName("simple-icon")[1];
  searchIcon.classList.remove("show");
  for (let i = 0; i < updateAllCard?.length; i++) {
    const element = updateAllCard[i];
    if (!element?.id?.includes(event?.target?.id?.split("-")[1])) {
      element.classList.remove("show-header-search");
    }
  }
  if (event?.target?.id === "header-dropdown") {
    updateCard?.classList.toggle("show-header-search");
    const changeIcon = document?.getElementsByClassName(
      "menu-header-container"
    );
    const searchIcon = changeIcon[0]?.getElementsByClassName("simple-icon")[1];
    updateCard.classList.contains("show-header-search")
      ? searchIcon.classList.add("show")
      : searchIcon.classList.remove("show");
    searchParamsFilters(
      "URLDATA",
      event?.target?.value?.replace("-header.dp"),
      true
    );
  }
});

document.body.addEventListener("keydown", function (event) {
  if (event?.target?.id === "inputFirstSearch") {
    inputCharacters(event);
  }
});

function inputCharacters(event) {
  if (event.keyCode == 13) {
    if (validateValue(event.target.value)) {
      searchParamsFilters("URLDATA", event.target.value, true);
    }
  }
}

const menuHeaderComponent = (attributes) => {
  const showList = () => {
    let list = "";
    attributes?.list?.map((elem) => {
      list += `
	  <div class="menu-container" id="${elem.id}-filters-dp">
      <div>
      <div class="conten">
      <span class="menu-list" id="${elem.id}-header.dp" style="padding-left:16px;">
      ${elem?.title}
      </span>
      </div>
      </div>
      </div>
		`;
    });
    return list;
  };

  return `
	<div class="menu-header-container">
		<div class="input-container">
			<icons-element name="searchIcon" className="simple-icon" id="search-filter-button"
			style="position: absolute; top:15px; left: 20px;"
			></icons-element>
			<input
			class="header-input"
			id="inputFirstSearch"
			placeholder="Puedes buscar por RFC o pedimiento">
		</input>
		</div>
		<div>
		<div class="container-dropdown" id='header-dropdown'>
			<icons-element name="filterHeader" id='header-dropdown' className="simple-icon"
			style="position: absolute; top:15px; left: 20px;"
			></icons-element>
			<span class="option" id='header-dropdown'>${attributes?.title}</span>
			<icons-element name="chevronDown" className="simple-icon"
			style="position: absolute; top:15px; right: 20px;"
			id='header-dropdown'
			></icons-element>
		</div>
		<div id='list-header-dropdown'>
		<div class="" style="padding: 10px;">
  			${showList()}
		</div>
		</div>
		</div>
	</div>
	`;
};

export default menuHeaderComponent;
