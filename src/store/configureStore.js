import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import jobsReducer from '../reducers/jobs';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
    combineReducers({
        jobs: jobsReducer,
        filters: filtersReducer
    }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


