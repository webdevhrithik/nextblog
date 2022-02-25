import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meat name='keywords' content='fact check, news, elections' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Fact Checking",
  description: "Fact behind Every Viral News",
};

export default Meta;
