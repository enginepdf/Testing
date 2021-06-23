// https://github.com/reduxjs/redux-mock-store

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; 
const mockStore = configureStore(middlewares); 

function action() {
  return {
    type: 'FETCH_DATA_FULFILLED'
  };
};

function fetchData () {  // function returns another function
  return dispatch => {
    return fetch('URL') 
      .then(() => dispatch(action()))
  };
};

it('should execute fetch data', () => {
  const store = mockStore({});

  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions();   // list of dispatched actions
      expect(actions[0]).toEqual(action());  // toEqual({ type: 'FETCH_DATA_FULFILLED' })
    });
});