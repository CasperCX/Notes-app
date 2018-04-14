import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './actions'
import { View, Text, Button } from 'react-native';
import { Input, Spinner } from './common/index';


class LoginForm extends Component {
  
    _onEmailChange(email) {
        this.props.emailChanged(email);
    };

    _onPasswordChange(password) {
        this.props.passwordChanged(password);
    };

    _onLogin() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    };

    _renderButton() {
        if (this.props.loading) {
            return <Spinner size="small"/>
        };

        return <Button onPress={this._onLogin.bind(this)} title="Sign in"/>
    };

    _renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={{color: 'red', fontSize: 18}}>{this.props.error}</Text>
                </View>
            );
        }
    };

    render() {
        return (
            <View>
                <Input
                    label="Email adress:" 
                    autoCorrect={true}   
                    placeholder="Email"
                    value={this.props.email}
                    onChangeText={this._onEmailChange.bind(this)}
                />
                <Input
                    secureTextEntry
                    label="Password:"    
                    placeholder="Password"
                    value={this.props.password}
                    onChangeText={this._onPasswordChange.bind(this)}
                />
                {this._renderError()}
                {this._renderButton()}
            </View>
           
        );
    }
};


const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    };
};

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser })(LoginForm);