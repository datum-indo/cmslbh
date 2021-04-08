import { InMemoryCache, ApolloClientOptions, split } from '@apollo/client/core';
import { NgModule, Inject } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { APOLLO_OPTIONS } from 'apollo-angular';





const uri = `http://${window.location.hostname}:3000/graphql`;
const uriWS = `ws://${window.location.hostname}:3000/graphql`;
// const uri = `http://10.10.10.40:3000/graphql`;
// const uriWS = `ws://10.10.10.40:3000/graphql`;
export const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => ({
  link: httpLink.create({ uri }),
  cache: new InMemoryCache(),
});

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
