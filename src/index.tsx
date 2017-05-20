import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { Grid, Container } from 'semantic-ui-react'
import { createStore } from 'redux'
import { reducers } from './reducers/index'
import { StoreState } from './types/index'
import { Provider } from 'react-redux'

import LabelList from './containers/LabelList'
import ToDoList from './containers/ToDoList'

const inititalState = {
  tasks: [{
    completed: false,
    title: 'show task list'
  }, {
    completed: true,
    title: 'show label list'
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
      </Grid>
    </Container>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
