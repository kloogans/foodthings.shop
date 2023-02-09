export const getProductType = (name: string) => {
  if (name.includes("aop hoodie")) return "aop hoodie";
  if (name.includes("aop crop tee")) return "aop crop tee";
  if (name.includes("aop tee")) return "aop tee";
  if (name.includes("aop sweatshirt")) return "aop sweatshirt";
  if (name.includes("aop tank")) return "aop tank";
  if (name.includes("crop tee")) return "crop tee";
  if (name.includes("sticker sheet")) return "sticker sheet";
  if (name.includes("sticker")) return "sticker";
  if (name.includes("tee")) return "tee";
  if (name.includes("bag")) return "bag";
  if (name.includes("apron")) return "apron";
  if (name.includes("tank")) return "tank";
  if (name.includes("hoodie")) return "hoodie";
  if (name.includes("sweatshirt")) return "sweatshirt";
  if (name.includes("mug")) return "mug";
  if (name.includes("leggings")) return "leggings";
  if (name.includes("samsung case")) return "samsung case";
  if (name.includes("iphone case")) return "iphone case";

  return "tee";
};
