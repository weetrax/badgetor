import CollectionsList from '../components/Collections/CollectionsList';
import Container from '../components/_Layout/Container';
import Head from 'next/head';
import React from 'react';
import { collections } from '../config';
import { useTypewriter } from 'react-simple-typewriter';
import type { NextPage } from "next";

const Home: NextPage = () => {

  const { text } = useTypewriter({
    words: collections.map((x) => x.name),
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  })

  return (
    <>
      <Head>
        <title>Badgetor</title>
        <meta name="description" content="NFT Badge Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className='py-8'>
          <div className='text-2xl md:text-3xl lg:text-4xl text-center font-bold'>
            Generate your unique{" "}
            <span className='text-primary-500 '>
              {text}
            </span>
            {" "}Badge !
          </div>
        </div>
        <CollectionsList isSearchable={false} />
      </Container>
    </>
  );
};

export default Home;
