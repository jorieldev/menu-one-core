import { iconsAssets } from "../../Icons/iconAssets.js";

function createSvg({
  name = "",
  image,
  button,
  height = "40px",
  width = "40px",
  className,
  id,
}) {
  let svgCode = "";
  if (image) {
    svgCode = `<img name=${name} src=${`${image}`} alt=${name} style="height:${height}; width:${width}"/>`;
  } else {
    if (iconsAssets[`${name}`]) {
      svgCode = iconsAssets[`${name}`]({ className, name, id });
    }
  }
  if (button) {
    button.href
      ? (svgCode += `<a href=${button.href}>
    <span name=${name} id=${id}>${button.text}</span>
    </a>`)
      : (svgCode += `<span name=${name} id=${id}>${button.text}</span>`);
    button.list
      ? (svgCode += iconsAssets.arrowDown({ className, name, id }))
      : null;
  }
  return svgCode;
}

export default createSvg;
