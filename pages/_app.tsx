import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next/types';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from "../lib/auth";

import axios from 'axios';
import Script from 'next/script';
import { useUser } from '../lib/auth';

type PageProps = {
  dehydratedState?: DehydratedState;
};

type ExtendedAppProps<P = {}> = {
  err?: NextPageContext['err'];
} & AppProps<P>;

function MyApp({ Component, pageProps }: ExtendedAppProps<PageProps>) {
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();
  const validateUserToken = async (token) => {
    if (token) {
      try {
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
        }
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
  }, [router]);

  useEffect(() => {
    useUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ToastContainer
          toastStyle={{
            backgroundColor: '#0f1c31',
            color: 'white',
            zIndex: 3,
          }}
        />
        {/* </AuthProvider> */}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
