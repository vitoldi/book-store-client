import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { AphorismCard } from '../components/aphorism-card/aphorism-card'

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Books store | Main</title>
      </Head>
      <Container>
        <AphorismCard />
      </Container>
    </>
  )
}

export default MainPage
