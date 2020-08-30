import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { observer } from 'mobx-react';
// context
import firebase from '@/firebase';
import store from '@/store';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (_: any) => {
      return false;
    },
  },
};
const SignIn = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      store.auth = !!user;
    });
  });

  if (store.auth) {
    return (
      <div>
        <h1>My App</h1>
        <p>
          Welcome {firebase.auth().currentUser?.displayName}! You are now
          signed-in!
        </p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default observer(SignIn);
