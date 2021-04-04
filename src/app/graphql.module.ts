import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular/http';
import {InMemoryCache, ApolloClientOptions, split} from '@apollo/client/core';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import { NgModule, Inject } from '@angular/core';



import { environment } from '@env/environment';





const uri = `http://${window.location.hostname}:3000/graphql`;
const uriWS = `ws://${window.location.hostname}:3000/graphql`;
// const uri = `http://10.10.10.40:3000/graphql`;
// const uriWS = `ws://10.10.10.40:3000/graphql`;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // console.log(uriWS);
  const http = httpLink.create({
    uri: uri,
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: uriWS,
    options: {
      reconnect: true,
    },
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http,
  );

  return {
    link: link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {},
    },
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
