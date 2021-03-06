import { GraphQLClient } from 'graphql-request';
import { inject } from 'vue';

const server = __DEV__ ? 'http://www.xyqdxh.com' : location.origin;
const endpoint = `${server}/index.php?graphql`;
const DefaultGraphQLClient = 'DefaultGraphQLClient ';
const GraphQLClientInstance = new GraphQLClient(endpoint, {});

export const createGraphQL = () => {
  return {
    install: (app: any, options: any) => {
      app.provide(DefaultGraphQLClient, GraphQLClientInstance);
    },
  };
};

export const useRequest = () => {
  const graphQLClient = inject(DefaultGraphQLClient) as GraphQLClient;
  return graphQLClient.request.bind(graphQLClient);
};

export const createRequest = () => {
  return GraphQLClientInstance.request.bind(GraphQLClientInstance);
};
