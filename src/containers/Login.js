import { LoginForm } from '../components/auth';
import { connect } from 'react-redux';
import { login } from '../actions/login';

const mapStateToLoginFormProps = (state) => {
    return state;
};

const mapDispatchToLoginFormProps = (dispatch) => ({
    onLoginSubmit: (credentials) => (
        dispatch(login(credentials))
    )}
);

const Login = connect(
    mapStateToLoginFormProps,
    mapDispatchToLoginFormProps
)(LoginForm);

export default Login;
