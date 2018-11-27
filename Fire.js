import firebase from 'firebase'; 

class Fire {
  constructor() {
    this.init();
    this.observeAuth (); 
    }
    observeAuth = () => 
    firebase.auth (). OnAuthStateChanged (this.onAuthStateChanged);
   onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };
  get ref () { 
  return firebase.database (). Ref ('mensagens'); 
}
on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
parse = snapshot => {
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const timestamp = new Date(numberStamp);
  const message = {
    _id,
    timestamp,
    text,
    user,
  };
 return message;
}
get uid() {
  return (firebase.auth().currentUser || {}).uid;
}
// 2.
get timestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}
send = messages => {
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
    const message = {
      text,
      user,
      timestamp: this.timestamp,
    };
    this.append(message);
  }
};
append = message => this.ref.push(message);
off() {
  this.ref.off();
}
  init = () =>
    firebase.initializeApp({
      apiKey: 'AIzaSyDcosIyYV8brkEB91UQ0kQK9L0mPDEyC-k',
      authDomain: 'chat-app-669d9.firebaseapp.com',
      databaseURL: 'https://chat-app-669d9.firebaseio.com',
      projectId: 'chat-app-669d9',
      storageBucket: 'chat-app-669d9.appspot.com',
      messagingSenderId: '189961312970',
    });
}

Fire.shared = new Fire();
export default Fire;
