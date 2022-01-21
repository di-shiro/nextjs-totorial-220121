import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { Button } from "../../components/Button";
import { getAllPostIds } from "../../lib/posts";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <p>2022/01/19</p>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Button>おはよー</Button>
    </Layout>
  );
}
