import { iconsAssets } from "./iconAssets.js";
const IconsComponentHtml = (attributes) => {
  if (!iconsAssets[`${attributes?.name}`]) return null;
  const obj = {
    className: attributes?.className,
    name: attributes?.name,
    id: attributes?.id,
  };
  return `
      ${iconsAssets[`${attributes?.name}`](obj)}
      `;
};

export default IconsComponentHtml;
