import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootreducer from './redux/'

const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;