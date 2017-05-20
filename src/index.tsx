import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Grid, Container } from 'semantic-ui-react'
import { createStore } from 'redux'
import reducers from './reducers/index'
import { StoreState } from './types/index'
import { Provider } from 'react-redux'

import Storage from './storage/Storage'
import LabelList from './containers/LabelList'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

import 'semantic-ui-css/semantic.min.css'
import './index.css';

function newStore() {
  let store = createStore<StoreState>(reducers, Storage.load());
  store.subscribe(() => { Storage.save(store.getState()) })
  return store;
}

const store = newStore()

ReactDOM.render(
  <Provider store={store}>
    <Container >
      <Grid centered padded divided >
        <Grid.Column width={3}>
          <LabelList />
        </Grid.Column>
        <Grid.Column width={6}>
          <ToDoList />
        </Grid.Column>
        <Grid.Column width={3}>
          task details
      </Grid.Column>
        <Grid.Row >
          <AddToDo />
        </Grid.Row>
      </Grid>
    </Container>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
