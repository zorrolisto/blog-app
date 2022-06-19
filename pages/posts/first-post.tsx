import { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/molecules/layout/layout";

const Header: FunctionComponent = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default Header;
