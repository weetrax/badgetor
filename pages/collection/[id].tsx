import ColorsEditor from "../../components/Editor/ColorsEditor";
import Container from "../../components/_Layout/Container";
import Head from "next/head";
import NFTInfo from "../../components/NFTInfo";
import React, { useEffect, useState } from "react";
import Screenshotable from "../../components/Screenshotable";
import { Collection, NFT } from "../../types";
import { EditorProvider } from "../../providers/EditorProvider";
import {
  getCollection,
  getCollectionNftCount,
  getNftByIdFromCollectionName,
} from "../../services";
import { useLoadingScreen } from "../../hooks/useScreenLoading";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const CollectionsId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [collection, setCollection] = useState<Collection | null>(null);
  const [nft, setNft] = useState<NFT | null>(null);
  const [nftCount, setNftCount] = useState<number>(100);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [collectionError, setCollectionError] = useState<string | null>(null);
  const [nftError, setNftError] = useState<string | null>(null);

  const [selectedNonce, setSelectedNonce] = useState<number>(1);

  useEffect(() => {
    if (id && !Array.isArray(id)) {
      getCollection(id)
        .then((response) => {
          if (response.data) {
            setCollection(response.data);
            getCollectionNftCount(id).then((responseCount) => {
              if (responseCount.data) {
                setNftCount(responseCount.data);
              }
            });
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setCollectionError("Collection identifier invalid.");
        });
    }
  }, [id]);

  useEffect(() => {
    //au chargement de la collection on load le 1er nft de celui ci
    if (collection) {
      fetchNftId(collection.collection, 1, () => {
        setIsLoading(false);
      });
    }
  }, [collection]);

  const fetchNftId = (
    collectionName: string,
    nonce: number,
    callback: () => void
  ) => {
    if (nonce && nonce <= nftCount) {
      getNftByIdFromCollectionName(collectionName, nonce)
        .then((response) => {
          if (
            response.data &&
            Array.isArray(response.data) &&
            Array.from(response.data).length === 1
          ) {
            setNft(response.data[0]);
          } else {
            setNftError("NFT identifier invalid.");
          }
        })
        .catch((err) => {
          //handle err
          setNftError("NFT identifier invalid.");
        })
        .finally(() => {
          callback();
        });
    } else {
      setNftError("NFT identifier invalid.");
    }
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFetching(true);
    fetchNftId(collection?.collection!, selectedNonce, () => {
      setIsFetching(false);
    });
  };

  useLoadingScreen(isLoading, "Loading collection...", "Please wait...");

  return (
    <>
      <Head>
        <title>Badgetor - Collections</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="py-8">
          {collectionError ? (
            <p>{collectionError}</p>
          ) : (
            <div>
              <form onSubmit={handleSubmitSearch} className="mb-4">
                <label className="block mb-1">
                  Search{" "}
                  <span className="text-primary-500">{collection?.name}</span>{" "}
                  NFT by ID
                </label>
                <input
                  className="px-2 py-1 rounded-l outline-none bg-dark-600 border border-primary-500 w-32"
                  type={"number"}
                  value={selectedNonce}
                  max={nftCount ?? 9999}
                  min={1}
                  onChange={(e) => setSelectedNonce(parseInt(e.target.value))}
                ></input>
                <button
                  className="px-2 py-1 rounded-r bg-primary-500 disabled:bg-primary-400 border border-primary-500"
                  type="submit"
                  disabled={isFetching}
                >
                  {isFetching ? "Loading..." : "OK"}
                </button>
              </form>
              <div>
                {nftError ? (
                  <p>{nftError}</p>
                ) : (
                  nft && (
                    <EditorProvider>
                      <div>
                        <ColorsEditor />
                      </div>
                      <div>
                        <Screenshotable>
                          <NFTInfo nft={nft} />
                        </Screenshotable>
                      </div>
                    </EditorProvider>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default CollectionsId;
