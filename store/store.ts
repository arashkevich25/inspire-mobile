/* eslint-disable @typescript-eslint/no-var-requires */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { acceptActionClassMiddleware } from './middlewares/acceptActionClassMiddleware';
import { authMiddleWare } from './middlewares/authMiddleware';

import { rootReducer } from 'reducers';

const middleWares = [thunk, acceptActionClassMiddleware, authMiddleWare];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleWares.push(createDebugger());
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
