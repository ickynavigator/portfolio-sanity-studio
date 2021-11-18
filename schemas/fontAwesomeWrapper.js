export default {
  name: 'fontawesomeIcon',
  title: 'Fontawesome Icon',
  type: 'object',
  fields: [
    {
      name: 'IconPrefix',
      title: 'Fontawesome Icon Prefix',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'IconName',
      title: 'Fontawesome Icon Name',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
  ],
};
