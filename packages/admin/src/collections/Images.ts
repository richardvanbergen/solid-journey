import { CollectionConfig } from 'payload/types';

const ImageCollection: CollectionConfig = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    enableRichTextRelationship: true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alternative Text',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'desktop',
        width: 2000,
        height: 2000,
      },
      {
        name: 'mobile',
        width: 1000,
        height: 1000,
      },
      {
        name: 'thumbnail',
        width: 400,
        height: 400,
      },
    ],
  },
}

export default ImageCollection
