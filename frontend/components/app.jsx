import React from 'react'
import SingupContainer from './session/signup_container'
import { Route } from 'react-router-dom'


export default () => (
    <div>
        <Route path="/signup" component={SingupContainer} />
    </div>
)