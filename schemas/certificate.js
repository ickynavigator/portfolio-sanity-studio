export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'certificateHide',
      title: 'Hide Certificate',
      type: 'boolean',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'idx',
      title: 'Certificate ID',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Certificate Name',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'authorityName',
      title: 'Authority Name',
      type: 'string',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'authorityImage',
      title: 'Authority Image',
      type: 'image',
      codegen: { required: true },
      validation: Rule => Rule.required(),
      options: { hotspot: true },
    },
    {
      name: 'startDate',
      title: 'Certificate Start Date',
      type: 'date',
      codegen: { required: true },
      validation: Rule => Rule.required(),
    },
    { name: 'endDate', title: 'Certificate End Date', type: 'date' },
    { name: 'certificateLink', title: 'Certificate Link', type: 'url' },
  ],

  initialValue: () => ({
    certificateHide: false,
    startDate: new Date().toISOString().split('T')[0],
  }),

  preview: {
    select: {
      title: 'name',
      media: 'authorityImage',
    },
  },
};
