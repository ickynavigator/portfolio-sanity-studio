// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object schemas
import blockContent from './objects/blockContent';
import fontawesomeIcon from './objects/fontAwesomeWrapper';
import issuerWrapper from './objects/issuerWrapper';
import socialLink from './objects/socialLink';
import urlWrapper from './objects/urlWrapper';

// We import document schemas
import category from './documents/category';
import author from './documents/author';
import personalInfo from './documents/personalInfo';
import project from './documents/project';
import certificate from './documents/certificate';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    personalInfo,
    project,
    certificate,

    category,
    author,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    socialLink,
    urlWrapper,
    issuerWrapper,
    fontawesomeIcon,
  ]),
});
