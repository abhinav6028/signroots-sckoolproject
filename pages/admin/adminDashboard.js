import { useState } from "react";
import ImageGrid from "../../components/ImageGrid";
import Modal from "../../components/Modal";
import UploadForm from "../../components/UploadForm";

import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import AdminLogin from "./index";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

function AdminDashboard() {
  const [user] = useAuthState(auth);
  const [selectedImg, setSelectedImg] = useState(null);
  const { logoutAdmin, admin } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!admin) {
  //     router.push("/admin");
  //   }
  //   return admin;
  // }, [admin, router]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutAdmin();
      router.push("/admin");
    } catch {
      console.log("error");
    }
  };

  if (!user) return <AdminLogin />;

  return (
    <div className="admin">
      <Head>
        <title>Admin-Dashboard | M.V.M Higher Secondary School</title>
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
      <div className="container">
        <div className="title">
          <h1>ADMIN </h1>
          {admin ? (
            <button className="logoutBtn btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : null}

          {/* <h2>Upload Pictures</h2>
          <p className="pt-3">
            Please make sure the images are png/jpg type files.
          </p>
        </div>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )} */}
        </div>
        <div className="container adminDashboard">
          <Link href="/admin/adminGallery">Admin Gallery</Link>
          <Link href="/admin/adminNews">Admin News</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
