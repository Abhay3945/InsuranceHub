import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App';
import store from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* Wrap the entire app in the Provider component and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
