import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/App/App';
import './globals/styles/index.css'

import reducerBoxShadow from './components/BoxShadow/reducer/reducer'
import reducerTextShadow from './components/TextShadow/reducer/reducer'

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
	reducerBoxShadow,
	reducerTextShadow

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
