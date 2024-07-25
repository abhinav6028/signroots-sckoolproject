import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState("");
  const [loading, setLoading] = useState(true);

  const loginAdmin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logoutAdmin = () => {
    return auth.signOut().then(() => setAdmin(""));
  };

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      // console.log(user);
      setLoading(false);
      setAdmin(user);
    });

    return unsubscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
