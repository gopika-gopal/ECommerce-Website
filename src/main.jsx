import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import ecoStore from './utils/ecoStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <Provider store={ecoStore}>
    <App />
  </Provider >
)
