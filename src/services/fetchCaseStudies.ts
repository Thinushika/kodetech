export const getCaseStudies = `
  *[_type == "caseStudies"]{
    caseName,
    projectUrl,
    clientLogo,
    tabImage,
    mainImage,
    feturedText,
    slug,
    tagline,
    body
  }
`;
