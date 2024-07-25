import Link from "next/link";

export default function FourOhFour() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
      }}
    >
      <h1 style={{ fontWeight: "400", fontSize: "26px" }}>
        404 - Page Not Found
      </h1>
      <Link href="/">
        <a
          style={{
            marginTop: "30px",
            color: "black",
            fontWeight: "500",
            letterSpacing: "1.5px",
            borderBottom: "2px solid #2177aa",
          }}
        >
          Go back home
        </a>
      </Link>
    </div>
  );
}
