import { Config } from "@graphql-mesh/types/typings/config";

const config: Config = {
  sources: [
    {
      name: "petStore",
      handler: {
        openapi: {
          source: "./openapi.json",
          endpoint: "http://localhost:3000/",
        },
      },
      // transforms: CDPTransforms as any,
    },
  ],
  serve: {
    browser: false,
    port: 3008
  },
  // additionalTypeDefs: ["./src/additional-typedefs/cdp.graphql"],
  // additionalResolvers: ["./src/additional-resolvers/cdp"],
  // documents: ["./src/documents/**/*.graphql"],
};

export default config;
