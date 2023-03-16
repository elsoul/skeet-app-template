module.exports = {
  schema: 'http://localhost:4000/graphql',
  generates: {
    './src/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}
