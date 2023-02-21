import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useState } from 'react';
import ReactLoading from 'react-loading';

export let status: Array<string> = ['ONGOING', 'UPCOMING', 'PAST'];
const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [statusItem, setStatusItem] = useState(null);
  const [gameItem, setGameItem] = useState('SELECT GAME');

  return <div>Checking</div>;
};

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  let pageNumber = 0;
  let search = null;
  let statusItem = null;
  let countryItem = [];
  let gameItem = null;
  const page = 0;
  const filter = 'asc';
  try {
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      dehydraytedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
