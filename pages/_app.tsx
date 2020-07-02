import { AppProps } from 'next/app';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import '../css/tailwind.css';
import '../node_modules/@fortawesome/fontawesome-pro/css/all.css';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    //uri: 'http://localhost:3000/api/graphql',
    uri:
      'https://stitch.mongodb.com/api/client/v2.0/app/speakdotdev-fntxz/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNWVmZDAxYTU1MTdjNWQ5ZmFlOTE4YWI4IiwiZXhwIjoxNTkzNjQ3NTgyLCJpYXQiOjE1OTM2NDU3ODIsImlzcyI6IjVlZmQxYWQ2NTE3YzVkOWZhZTk2YzU5ZSIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjVlZmQwMWE1NTE3YzVkOWZhZTkxOGFiOCIsInN1YiI6IjVlZmQwNDE3NTE3YzVkOWZhZTkyMDdhMSIsInR5cCI6ImFjY2VzcyJ9.X8M0m8rm4cyChRcbyuR-o9V7cSWZvVHe9kxwtzZPatI`,
    },
  });
})(App);
