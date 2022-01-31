import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import './index.scss';
// import browserHistory from './browser-history';
import { reducer } from './store/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createApi } from './service/api';
import { fetchNews } from './store/api-action';

const api = createApi();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

store.dispatch(fetchNews());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
