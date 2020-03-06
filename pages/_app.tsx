import { AppProps } from 'next/app';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import '../css/tailwind.css';
import '../node_modules/@fortawesome/fontawesome-pro/css/all.css';

function App({ Component, pageProps, apollo }) {
    return (
        <ApolloProvider client={apollo}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default withApollo(({ initialState }) => {
    return new ApolloClient({
        uri: 'http://localhost:3000/api/graphql',
        cache: new InMemoryCache().restore(initialState || {})
    });
})(App);