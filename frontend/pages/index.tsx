import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/Head';
import { Fragment } from 'react';
import { Appointments } from '../components/Appointments';
import styles from '../styles/Home.module.css';

function Home({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Fragment>
      <Head>
        <title>Audubon | Bird Walk Scheduling</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>When do you want to visit?</h1>
        <Appointments events={events} />
      </main>
    </Fragment>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/events`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      events: data,
    },
  };
};
