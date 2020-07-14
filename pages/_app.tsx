import { AppProps } from 'next/app';
import '../css/tailwind.css';
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://speakdevtest.vercel.app/api/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
