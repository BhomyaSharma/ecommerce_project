import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client.js';
import { store } from './redux/store.js';
import App from './app.js';
import '../CSS/styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ApolloProvider>
);
