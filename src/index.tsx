import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { Grid, Container } from 'semantic-ui-react'
import { createStore } from 'redux'
import { reducers } from './reducers/index'
import { StoreState } from './types/index'
import { Provider } from 'react-redux'

const uuid = require('uuid/v4')

import LabelList from './containers/LabelList'
import ToDoList from './containers/ToDoList'
import AddToDo from './containers/AddToDo'

const inititalState = {
  tasks: [{
    completed: false,
    title: 'show task list',
    id: uuid()
  }, {
    completed: true,
    title: 'show label list',
    id: uuid()
  }
  ],
  currentLabel: 'Inbox'
}
const store = createStore<StoreState>(reducers, inititalState)

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
