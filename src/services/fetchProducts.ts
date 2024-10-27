export const getProducts = `
  *[_type == "products"]{
    title,
    mainItem,
    feturedText,
    slug,
    mainImage,
    body
  }
`;
