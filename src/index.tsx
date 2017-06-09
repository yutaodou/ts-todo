import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux'
import reducers from './reducers/index'
import { StoreState } from './types/index'
import { Provider } from 'react-redux'

import Storage from './storage/Storage'
import LabelList from './containers/LabelList'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

import 'bulma/css/bulma.css'
import './index.css';

function newStore() {
  let store = createStore<StoreState>(reducers, Storage.load());
  store.subscribe(() => { Storage.save(store.getState()) })
  return store;
}

const store = newStore()

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
