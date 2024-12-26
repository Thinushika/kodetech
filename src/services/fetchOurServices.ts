export const getServices = `
  *[_type == "services"]{
    serviceName,
    slug,
    featuredImage,
    mainImage,
    feturedText,
    techStack,
    body
  }
`;
