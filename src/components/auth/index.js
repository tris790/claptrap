import { Fragment } from "preact";
import { createContext } from "preact";
import firebase, { auth, provider } from "../../firebase.js";
import { useState, useCallback } from "preact/hooks";
const AuthContext = createContext(null);

function useAuth() {
  const [auth, setAuth] = useState(null);
  const signIn = useCallback(() => {
    console.log(firebase.auth());
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        setAuth({
          token: result.credential.accessToken,
          user: result.user
        });
      });
  }, [auth]);

  const signOut = useCallback(() => {
    setAuth(null);
  }, []);
  return { auth, signIn, signOut };
}

const AuthProvider = props => {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};
export { AuthContext };
export default AuthProvider;
