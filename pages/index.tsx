import Container from '../components/_Layout/Container';
import Head from 'next/head';
import NFTInfo from '../components/NFTInfo';
import React, { useEffect, useState } from 'react';
import Screenshotable from '../components/Screenshotable';
import { NFT } from '../types';
import type { NextPage } from "next";
import ColorsEditor from '../components/Editor/ColorsEditor';
import { EditorProvider } from '../providers/EditorProvider';

const Home: NextPage = () => {

  const [selectedApezId, setSelectedApezId] = useState<string>("337");
  const [selectedApez, setSelectedApez] = useState<NFT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDaApez = () => {
    fetch(
      `https://api.elrond.com/collections/DAPEZ-c88658/nfts?name=${selectedApezId}&withOwner=true`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((json) => {
          if (json && Array.isArray(json) && Array.from(json).length > 0) {
            setSelectedApez(json[0]);
          } else {
            setSelectedApez(null);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDaApez();
  }, []);

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchDaApez();
  };

  return (
    <>
      <Head>
        <title>Badgetor</title>
        <meta name="description" content="NFT Badge Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {selectedApez ? (
          <div className='my-8'>
            <p className='block text-3xl sm:text-4xl leading-none font-extrabold tracking-tight mb-10'>Generate your <span className='text-primary-500'>Custom</span> Badge !</p>
            <EditorProvider>
              <div className="grid grid-cols-1">
                <div className="col-span-1">
                  <div className="my-2">
                    <div className="flex flex-col items-start gap-4">
                      <form onSubmit={handleSubmitSearch}>
                        <label className="block">Search by Id</label>
                        <input
                          className="px-2 py-1 rounded-l outline-none disabled:bg-gray-300"
                          type={"text"}
                          value={selectedApezId}
                          readOnly
                          disabled
                          onChange={(e) => setSelectedApezId(e.target.value)}
                        ></input>
                        <button
                          className="px-2 py-1 rounded-r bg-primary-500"
                          type="submit"
                        >
                          {loading ? "Loading..." : "OK"}
                        </button>
                      </form>
                      <div>
                        <ColorsEditor />
                      </div>
                    </div>

                  </div>
                  <div>
                    <Screenshotable>
                      <NFTInfo nft={selectedApez} />
                    </Screenshotable>
                  </div>
                </div>
              </div>
            </EditorProvider>
          </div>
        ) : (
          <p className="py-4">Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Home;
