import CollectionsList from '../components/Collections/CollectionsList';
import Container from '../components/_Layout/Container';
import Head from 'next/head';
import type { NextPage } from "next";

const Collections: NextPage = () => {

    return (
        <>
            <Head>
                <title>Badgetor - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <div className='py-8'>
                    <CollectionsList />
                </div>
            </Container>
        </>
    )
}

export default Collections;