import React from 'react';

export default {
  name: 'contactForms',
  title: 'Contact Forms',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'message', title: 'Message', type: 'string' },
    { name: 'reviewed', title: 'Reviewed', type: 'boolean' },
  ],

  initialValue: () => ({
    reviewed: false,
  }),

  preview: {
    select: {
      name: 'name',
      email: 'email',
      status: 'reviewed',
    },
    prepare: ({ name, email, status }) => {
      const EMOJIS = { false: '✅', true: '🚫' };
      return {
        title: name,
        subtitle: email,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {status ? EMOJIS[status] : '🚫'}
          </span>
        ),
      };
    },
  },
};
