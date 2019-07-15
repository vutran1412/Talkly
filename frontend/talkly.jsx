import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import { signUp, login, logout } from './actions/session'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore()

    // START TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.signUp = signUp
    window.login = login
    window.logout = logout
    //END TESTING



    ReactDOM.render(<Root store={store} />, root)
})