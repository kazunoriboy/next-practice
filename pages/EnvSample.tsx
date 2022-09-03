import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.Test', process.env.TEST)

  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>Create React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{process.env.TEST}</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('process.env.Test', process.env.TEST)

  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);

  return {
    props: {}
  }
}

export default EnvSample
