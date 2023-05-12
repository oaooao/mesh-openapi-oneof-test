import { Config } from "@graphql-mesh/types/typings/config";

const config: Config = {
  sources: [
    {
      name: "petStore",
      handler: {
        openapi: {
          source: "./openapi.yaml",
          endpoint: "http://localhost:3000/",
        },
      },
    },
  ],
  serve: {
    browser: true,
    port: 3008
  },
};

export default config;
