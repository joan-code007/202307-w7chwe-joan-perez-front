import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, githubAuthProvider } from "../../firebase";
import "./LoginPage.css";

const LoginPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, githubAuthProvider);

    navigate("/robots");
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/robots");
  };

  return (
    <div className="login">
      <h2 className="login__welcome">
        ! Create your favourite anime robots !✌🏻
      </h2>
      {user ? (
        <button onClick={logout} className="login-button">
          Sign out
        </button>
      ) : (
        <button onClick={login} className="login-button">
          Sign in with Github
        </button>
      )}
    </div>
  );
};

export default LoginPage;
