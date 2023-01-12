import 'sanity';

declare module 'sanity' {
  interface StringDefinition {
    /** Required for codegen */
    codegen?: { required: boolean };
  }
}
