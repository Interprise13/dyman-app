import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});


export const startLogin = () => {
    return () => {
        googleAuthProvider.setCustomParameters({
            prompt: 'select_account'
        });
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const loggedInAs = () => {
    return firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is logged in")
        } else {
        console.log("User is logged out")
        }
    });
};