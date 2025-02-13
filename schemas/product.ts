export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // ... other fields
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    // ... other fields
  ]
} 