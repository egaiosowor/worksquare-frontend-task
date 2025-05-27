export function normalize(str: string) {
  return str.toLowerCase().replace(/\s+/g, "");
}

export function formatPrice(price: string) {
  return Number(price.replace(/[^0-9.-]+/g, ""));
}
