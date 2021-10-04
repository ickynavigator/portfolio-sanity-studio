export default {
  name: 'personalInfo',
  title: 'Personal Info',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'jobStatus',
      title: 'Job Status',
      type: 'string',
      options: {
        list: [
          { title: 'Open For Hire', value: 'open' },
          { title: 'In Between Jobs', value: 'inbetween' },
          { title: 'Unavailable', value: 'close' },
        ],
        layout: 'radio',
      },
    },
    { name: 'CV', title: 'Curriculum Vitae', type: 'file' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
