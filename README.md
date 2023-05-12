# mesh-openapi-oneof-test

This is a test project to demonstrate the issue with oneOf in OpenAPI 3.0.2.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run server:rest`
4. Run `npm run dev`
5. Open http://localhost:3008/graphql in your browser
6. Launch a query as follows
```graphql
query MyQuery {
  pets_by_id(id: "1") {
    petType
    name
    ... on Dog {
      dog_exclusive
    }
    ... on Cat {
      cat_exclusive
    }
  }
}
```
7. Observe the response