import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebaseConfig";
import AdminDashboard from "./adminDashboard";

function AdminLogin() {
  const { loginAdmin, logoutAdmin, admin } = useAuth();
  const [user] = useAuthState(auth);

  const router = useRouter();

  const initialValue = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState("");

  const { email, password } = values;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //loginAdmin(email, password);
    try {
      await loginAdmin(email, password);
      setValues(initialValue);
      router.push("/admin/adminDashboard");
    } catch {
      setError("Failed to login, Please try again");
    }
  };

  if (user) {
    router.push("/admin/adminDashboard");
    return <AdminDashboard />;
  }

  return (
    <div className="adminLogin">
      <Head>
        <title>Admin | M.V.M Higher Secondary School</title>
        <meta
          name="description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta
          property="og:description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta
          name="twitter:description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta property="og:image" content="/images/favicon/favicon-32x32.png" />
        <meta
          name="twitter:image"
          content="/images/favicon/favicon-32x32.png"
        />
        <meta name="twitter:card" content="/images/favicon/favicon-32x32.png" />
        <meta
          property="article:section"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.mvmrhss.com/" />
        <meta
          property="og:title"
          content="M.V.M Higher Secondary School"
        ></meta>
      </Head>
      <div className="adminLoginContainer container px-2">
        <h1>ADMIN LOGIN</h1>
        <div className="rightFormContainer">
          {<p className="text-danger">{error}</p>}


          <form onSubmit={handleFormSubmit}>
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email *"
                    required
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                      setError("");
                    }}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value });
                      setError("");
                    }}
                    placeholder="Your Password *"
                    required
                    value={password}
                  />
                </div>
              </div>

              <div className="col-xl-12 col-sm-12">
                <div className="form-group form-bottom">
                  <input
                    id="form_botcheck"
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    className="thm-btn bg-clr1"
                    type="submit"
                    data-loading-text="Please wait..."
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
