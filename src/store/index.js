import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from './rootSaga';
import reducer from './rootReducer';

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});
const middlewares = [logger, sagaMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(sagas);

export default store;
