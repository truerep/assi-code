import React from 'react';
import Head from 'next/head';

import {
  AppDownload,
  ClientsList,
  Footer,
  GrowthCards,
  Header,
  HeroBanner
} from '@/components';

const index = () => (
  <>
    <Head>
      <title>Acme Notes - Organize Your Thoughts Effortlessly</title>
      <meta name="description" content="Discover the ultimate notes app that helps you organize your thoughts effortlessly. Take notes, set reminders, and stay organized on any device." />
      <meta name="keywords" content="notes app, note-taking, productivity app, organization, reminders, task management" />
      <meta name="author" content="Acme Corporation" />
    </Head>
    <Header />
    <HeroBanner />
    <GrowthCards />
    <ClientsList />
    <AppDownload />
    <Footer />
  </>
);

export default index;
