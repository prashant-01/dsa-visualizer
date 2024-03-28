import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { Provider } from 'react-redux';
import appStore from './src/redux/appStore';

const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(
    <Provider store={appStore}>
        <App/>
    </Provider>
);