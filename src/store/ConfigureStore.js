import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import socket from './socket'

export default function configureStore(initialState) {
  const middleware = [thunk, socket("10.0.0.234:8000")]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
    ))

  return store
}