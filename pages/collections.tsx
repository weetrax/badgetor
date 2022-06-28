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
                Show all collections
            </Container>
        </>
    )
}

export default Collections;