import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import NotesList from './NotesList';
import CreateNote from './CreateNote';
import NoteEdit from './NoteEdit';

class RouterComponent extends Component {

    // //LOGIN WITH DEBUG ACCOUNT
    // componentDidMount() {
    // var debug = true;
    // if (debug) {
    //     firebase.auth().signInWithEmailAndPassword('User@example.com', 'Password')
    //     .then(Actions.notes());
    //     }
    // };


        render() {
            return (
                <Router>
                    <Scene key="root" hideNavBar>
                        <Scene key="auth">
                            <Scene key="login" component={LoginForm} title="Login" initial />
                        </Scene>
                        <Scene key="main">
                            <Scene
                                rightTitle="Add"
                                onRight={() => Actions.noteCreate()}
                                key="notes" component={NotesList} title="My notes"
                                initial
                            />
                            <Scene key="noteCreate" component={CreateNote} title="Create Note" />            
                            <Scene key="noteEdit" component={NoteEdit} title="Edit Note" />   
                                         
                        </Scene>
                    </Scene>
                </Router>
            );
        };
};

export default RouterComponent;