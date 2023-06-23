import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSwitch from './Components/RouterSwitch';
import { Provider } from 'react-redux'
import store from './Components/Store.js'
import './Styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterSwitch />
    </React.StrictMode>
  </Provider>

)
