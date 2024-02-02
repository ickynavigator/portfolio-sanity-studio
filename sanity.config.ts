import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: 'portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemas,
  },
  tools: prev => {
    if (process.env.NODE_ENV === 'development') {
      return prev;
    }

    return prev.filter(tool => tool.name !== 'vision');
  },
});
