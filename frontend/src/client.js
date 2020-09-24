import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '',
  dataset: 'production',
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export default client;
