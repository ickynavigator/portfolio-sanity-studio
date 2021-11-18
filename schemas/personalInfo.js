export default {
  name: 'personalInfo',
  title: 'Personal Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
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
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    { name: 'CV', title: 'Curriculum Vitae', type: 'file' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      codegen: { required: true },
      validation: Rule => Rule.required(),
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
