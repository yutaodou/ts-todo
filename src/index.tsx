import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import { StoreState } from './model';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import * as Model from './model'
import LabelList from './containers/LabelList'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

import 'bulma/css/bulma.css'
import './index.css';

let store = createStore<StoreState>(reducers, Model.INITIAL_STATE, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div className="columns">
        <LabelList />
        <ToDoList />
        <div className="column">
          task details
        </div>
      </div>
      <AddToDo />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);