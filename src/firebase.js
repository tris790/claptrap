import * as fb from "firebase";
const firebase = fb.default;
const config = {
  apiKey: "AIzaSyB0FQYm48miB7ibFYgJmyKYSCrZS5XPyIk",
  authDomain: "storage-c8f86.firebaseapp.com",
  databaseURL: "https://storage-c8f86.firebaseio.com",
  projectId: "storage-c8f86",
  storageBucket: "storage-c8f86.appspot.com"
};
console.log(firebase);
firebase.initializeApp(config);

const deleteFile = (user, file) => {
  console.log("delete", user, file);
  const storageRef = firebase
    .storage()
    .ref()
    .child(`/users/${user.uid}/${file.name}`);
  storageRef
    .delete()
    .then(() => {
      const publicUrl = `public/files/${file.key}`;
      const privateUrl = `private/${user.uid}/files/${file.key}`;

      // Private
      firebase
        .database()
        .ref(privateUrl)
        .remove();

      // Public
      firebase
        .database()
        .ref(publicUrl)
        .remove();
    })
    .catch(function(error) {});
};

const shareFile = file => {
  firebase
    .database()
    .ref(`/public/files/${file.key}`)
    .set(file);
};

let onFile = () => {};
let onFileEventRan = false;

const registerOnFileReceived = (user, callback) => {
  if (!onFileEventRan) {
    console.log("register on file received");
    firebase
      .database()
      .ref(`private/${user.uid}/files`)
      .on("value", snapshot => onFile(snapshot));
    onFileEventRan = true;
  }
  onFile = snapshot => {
    console.log("on-file");
    let newFiles = [];
    snapshot.forEach(f => {
      newFiles.push({ key: f.key, ...f.val() });
    });
    callback(newFiles);
  };
};

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export { shareFile, deleteFile, registerOnFileReceived };
export default firebase;
