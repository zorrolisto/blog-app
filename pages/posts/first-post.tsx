import { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";

const Header: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>;
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default Header;
