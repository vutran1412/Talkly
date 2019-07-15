import { connect } from 'react-redux'
import { signUp } from '../../actions/session'
import Signup from './signup'

const mapDispatchToProps = dispatch => ({
    signUp: formUser => dispatch(signUp(formUser))
})

export default connect(null, mapDispatchToProps)(Signup)