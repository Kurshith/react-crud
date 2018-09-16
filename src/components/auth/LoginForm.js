import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import { Redirect } from 'react-router-dom';


export class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        redirecToDashboard: false
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLoginSubmit(this.state);
        this.setState({
            email: '',
            password: ''
        });
    };

    componentDidUpdate() {
        let auth = this.props;
        if (auth.authentication.authentication) {
            this.setState({
                redirecToDashboard: true
            });
        }
    };

    render () {
        const { redirecToDashboard } = this.state;

        if (redirecToDashboard === true) {
            return <Redirect to='/dashboard' />
        }

        return (
            <Paper className="login" elevation={1}>
                <Avatar>
                    <LockIcon />
                </Avatar>

                <Typography variant="headline">Login</Typography>

                <form onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                        id="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.onChange}
                        value={this.state.email}
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                        name="password"
                        type="password"
                        id="password"
                        onChange={this.onChange}
                        autoComplete="current-password"
                        value={this.state.password}
                        />
                    </FormControl>

                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        )
    }
};
