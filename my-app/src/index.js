import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter} from 'react-router-dom'

const products =
[
  {id:1,
    name:"iphone 11",
    description:"this ia iphone 11"
  },

{id:2,
  name:"iphone 12",
  description:"this is iphone 12"
},

{id:3,
  name:"iphone 13",
  description:"this is iphone 13"
}
]


const store = createStore(reducer,products,composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


