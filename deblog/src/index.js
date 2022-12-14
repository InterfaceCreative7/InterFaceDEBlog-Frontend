import { createRoot } from 'react-dom/client';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
