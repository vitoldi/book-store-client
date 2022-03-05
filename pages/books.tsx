import type { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

interface BookDto {
  _id: string
  image: string
  title: string
  price: string
  year: string
  description: string
  author: string
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:8000/books')
  const books: BookDto = await response.json()
  console.log(response)
  console.log('here')
  return {
    props: {books}
  }
}

const MainPage = ({books}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Books store | Books</title>
      </Head>
        <div>
          {JSON.stringify(books)}
        </div>
    </>
  )
}

export default MainPage
