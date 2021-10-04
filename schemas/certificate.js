export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    { name: 'certificateHide', title: 'Hide Certificate', type: 'boolean' },
    { name: 'idx', title: 'Project ID', type: 'string' },
    { name: 'name', title: 'Project Name', type: 'string' },
    { name: 'authorityName', title: 'Authority Name', type: 'string' },
    {
      name: 'authorityImage',
      title: 'Authority Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'startDate', title: 'Certificate Start Date', type: 'date' },
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
