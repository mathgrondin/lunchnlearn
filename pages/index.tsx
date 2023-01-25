import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { getSickValueFromDB } from './api/sick'


type props = {
  isSick: boolean;
}


export default function Home({ isSick }: props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <>
            <h1 className={styles.description}>{isSick ? "C'est le fun hein?" : "Pas fun"}</h1>
            <div className={styles.ImageContainer}>
              <Image src="/dogs.gif" height={0} width={0} alt={'dogs'} sizes="25vw"
                style={{ width: '100%', height: 'auto' }} />
            </div>
          </>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isSick = await getSickValueFromDB()
  console.log("isSick", isSick)
  return {
    props: { isSick }
  }
};
