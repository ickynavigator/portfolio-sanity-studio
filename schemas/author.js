export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    { title: 'Github URL', name: 'githubUrl', type: 'url' },
    {
      name: 'githubImage',
      title: 'Github Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'githubImage',
    },
  },
};
