import Head from 'next/head'

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Books store | Books</title>
      </Head>
        <div>
          {JSON.stringify([])}
        </div>
    </>
  )
}

export default MainPage
