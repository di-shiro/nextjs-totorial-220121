import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

// このコンポーネントに渡されている引数postDataは、
// 下にあるgetStaticPaths()がreturnしたものである。
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// getStaticPaths()では、idとして用いる事のできる配列を返す。
// この[id].jsでどのようなファイルを
// 表示する可能性があるかを判断して、その静的ファイルは事前に
// ビルドしたときに用意しておくように伝える役割。
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// idに基づいて、静的ファイル（Post）に必要なデータをfetchする。（引っ張ってくる）
// 事前にビルドした時に静的ファイルに使うデータを取ってくる役割
// 最後にreturnしたオブジェクト型postDataは、
// 上にあるPostコンポーネントに引数として渡されている。
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
