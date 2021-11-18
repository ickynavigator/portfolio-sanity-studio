export default {
  name: 'socialLink',
  //   title: 'Social Media Link',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Social Media Name',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Social Media Link',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Social Media Icon',
      type: 'fontawesomeIcon',
    },
  ],
};
