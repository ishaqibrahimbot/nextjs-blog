import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="container mx-auto px-56 flex flex-col items-center mt-12">
        <p className="text-xl">
          Hello, I'm Ishaq. I'm a software engineer at Teamo. I live in Karachi,
          Pakistan.
        </p>
        <p className="text-xl mt-5">
          (This is a sample website - you’ll be building a site like this on{' '}
          <a className="text-blue-600" href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className="container flex flex-col items-start px-56 mt-8">
        <h2 className="text-2xl font-bold">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-4" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-xl text-blue-600">{title}</a>
              </Link>
              <br />
              <small className="text-lg text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
