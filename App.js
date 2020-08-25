import React from 'react'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
import Task from './Task'

const {store, persistor} = configureStore()

export default App = (props) => {
  
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Task />
            </PersistGate>
        </Provider>
    )
}
