export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectHide',
      title: 'Hide Project',
      type: 'boolean',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Project Name',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    { name: 'projectUrl', title: 'Project URL', type: 'urlWrapper' },
    { name: 'sourceUrl', title: 'Source URL', type: 'urlWrapper' },
    { name: 'projectIssuer', title: 'Project Issuer', type: 'issuerWrapper' },
    {
      name: 'externalAuthors',
      title: 'External Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: Rule => Rule.unique(),
    },
    {
      name: 'profileStatus',
      title: 'Profile Status',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Abandoned', value: 'abandoned' },
        ],
        layout: 'radio',
      },
    },
  ],

  initialValue: () => ({
    projectHide: false,
    projectUrl: { visibility: false },
    sourceUrl: { visibility: false },
  }),

  preview: {
    select: {
      title: 'name',
      media: 'projectImage',
    },
  },
};
