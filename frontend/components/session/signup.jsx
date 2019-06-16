import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className="">
                <h2>Sign Up!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input type="text" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <label>Confirm Password:
                        <input type="text" value={this.state.passwordConfirm} onChange={this.handleInput("confirmPassword")} />
                    </label>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default Signup