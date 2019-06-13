export function formatPrice(cents){
  return (cents/100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

export default function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

export function getFunName(){
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome"
    ];

  const nous = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice"
    ];
}
