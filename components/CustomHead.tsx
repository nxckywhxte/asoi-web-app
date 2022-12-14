import Head from 'next/head'

const CustomHead = ({title}:{title:string}) => {
  const msg = `АГНИ Автоматизация - ${title}`
  return (
    <Head>
        <title>{msg}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default CustomHead