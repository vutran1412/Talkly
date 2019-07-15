import * as SessionApiUtil from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signUp = formUser => dispatch => SessionApiUtil.postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )

export const login = formUser => dispatch => SessionApiUtil.postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )

export const logout = () => dispatch => SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))

