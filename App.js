import React from 'react'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Task from './Task'


const store = createStore(reducer)

export default App = (props) => {
  
    return (
        <Provider store={store}>
        <Task />
        </Provider>
    )
}
