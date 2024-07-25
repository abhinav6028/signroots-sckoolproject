import Link from "next/link";

export default function custom500() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        oooooooops
      </Link>
    </>
  );
}
