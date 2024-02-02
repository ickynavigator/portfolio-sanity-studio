THIS IS NO LONGER IN USE SINCE THE [CLIENT](https://github.com/ickynavigator/portfolio-sanity-client) NOW HAS THE STUDIO BUILT IN.

# Portfolio Sanity Studio

This is the sanity CMS that powers it's sister project [portfolio-sanity-client](https://github.com/ickynavigator/portfolio-sanity-client). It can be deployed on it's own and used to store info for any other framework.

## Getting Started

### Environment Variables

The Sanity Dataset is the name of the dataset you want to use. Go to your sanity project datasets page to find it

```bash
NEXT_PUBLIC_SANITY_DATASET =
```

The Sanity project id is the id linked with the sanity project. It should be on the dashboard of your sanity project.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID =
```

## Commands

### Starting the App

Run the development server:

```bash
yarn run dev
```

#### Viewing the studio

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Generate the schema types

```bash
yarn run codegen
```
