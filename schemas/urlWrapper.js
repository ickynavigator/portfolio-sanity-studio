export default {
  name: 'urlWrapper',
  // title: 'URL Wrapper',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    { title: 'Hide URL', name: 'visibility', type: 'boolean' },
  ],

  initialValue: () => ({
    visibility: false,
  }),
};
