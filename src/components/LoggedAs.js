import React from 'react';
import firebase from '../firebase/firebase';

export default class LoggedAs extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.state = ({ currentUser: user})
            } else {
                // No user is signed in.
            }
        });
    }
    render() {
        const { currentUser } = this.state
        return (
            <div>
                <p>Hi {currentUser}!</p>
            </div>
    );
  };
};