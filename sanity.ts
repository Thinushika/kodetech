import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const sanityClient = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID, 
  dataset: process.env.SANITY_STUDIO_DATASET, 
  useCdn: true,
  apiVersion: process.env.SANITY_STUDIO_APIVERSION, 
  token: process.env.SANITY_STUDIO_API_TOKEN, 
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export default sanityClient
