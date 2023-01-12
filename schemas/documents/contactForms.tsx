import React from 'react';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactForms',
  title: 'Contact Forms',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'message', title: 'Message', type: 'string' }),
    defineField({ name: 'reviewed', title: 'Reviewed', type: 'boolean' }),
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
});
