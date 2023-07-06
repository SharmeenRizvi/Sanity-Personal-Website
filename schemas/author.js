export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'authorname',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'authordesc',
      type: 'string',
      title: 'About the Author',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}