import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store.js";
import axios from 'axios';
//Imports del chat
import { ChatProvider } from './context/chatContext/chatContext';
import { AuthProvider } from './context/authContext/AuthContext';
import { SocketProvider } from './context/socketContext/SocketContext';
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <AuthProvider>
      <SocketProvider>
        <Provider store={store}>
          <React.Fragment>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.Fragment>
        </Provider>
      </SocketProvider>
    </AuthProvider>
  </ChatProvider>,
);