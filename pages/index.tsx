import CollectionsList from "../components/Collections/CollectionsList";
import Container from "../components/_Layout/Container";
import Head from "next/head";
import React from "react";
import { collections } from "../config";
import { useTypewriter } from "react-simple-typewriter";
import type { NextPage } from "next";
import Link from "next/link";
import { routes } from "../routes";

const Home: NextPage = () => {
  const { text } = useTypewriter({
    words: collections.map((x) => x.name),
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1200,
  });

  return (
    <>
      <Head>
        <title>Badgetor</title>
        <meta name="description" content="NFT Badge Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundImage: "url('/assets/img/topography.svg')" }}>


        <Container>
          <div className="py-16 text-center min-h-screen-nav flex flex-col items-center justify-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Generate your unique{" "}
                <div>
                  <span className="text-primary-500 ">
                    {text}
                    <CursorBlink />
                  </span>{" "}
                  Badge !
                </div>
              </h1>
              <p className="py-4">
                Create unique and 100% customizable NFT Badges with QR Code integration.
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold mb-4 text-center md:text-left"><span className="text-primary-500">Millions</span> of possibilities</div>
          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            <div className="col-span-2 md:col-span-1">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="mb-2">
                    Our badge editor allow you to generate and download unique and 100% customizable NFT Badges.
                  </p>
                  <p className="mb-4">
                    Choose your favorites colors and change the background, font and even the QR Code.
                  </p>
                </div>
                <div>
                  <Link href={routes.collections}
                  >
                    <a className="inline-flex justify-center rounded bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-400">
                      Explore collections
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div>
                <img src="/assets/img/hero.gif" />
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="text-2xl font-bold mb-4"><span className="text-primary-500">Top</span> collections</div>
            <CollectionsList isSearchable={false} />
            <div className="text-right">
              <Link href={routes.collections}
              >
                <a className="inline-flex justify-center rounded px-4 py-2 text-sm font-medium text-primary-500 hover:text-primary-400">
                  View all collections
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const CursorBlink = () => {
  return <>
    <style jsx>{`
        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .cursor {
          animation: blink 1s linear infinite forwards;
        }
      `}</style>
    <span className="cursor blink">|</span>
  </>
}

export default Home;
