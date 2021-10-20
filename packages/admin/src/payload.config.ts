import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Image from './collections/Images';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Image,
    Categories,
    Posts,
    Tags,
    Users,
  ],
  // upload: {
  //   staticDir: '/var/data',
  // },
});
