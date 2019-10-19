import { AuthContext } from "../auth";
import { useContext } from "preact/hooks";

const Login = () => {
  const { auth, signIn, signOut } = useContext(AuthContext);
  console.log(auth);

  return (
    <div>
      <div>{auth && auth.user.displayName}</div>
      <button onClick={signIn}>SignIn</button>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
};
export default Login;
