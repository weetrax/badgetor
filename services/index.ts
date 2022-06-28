import axios from "axios"

const getCollectionUrl = () => {
    return "https://api.elrond.com/collections/"
}

const getCollectionNftCountUrl = (collectionName: string) => {
    return `https://api.elrond.com/nfts/count?collection=${collectionName}`
}

const getNftByIdFromCollectionNameUrl = (collectionName: string, nonce: number) => {
    return `${getCollectionUrl()}${collectionName}/nfts?name=${nonce}&withOwner=true&withSupply=true`;
}

export const getCollection = (collectionName: string) => {
    return axios.get(getCollectionUrl() + collectionName);
}

export const getCollectionNftCount = (collectionName: string) => {
    return axios.get(getCollectionNftCountUrl(collectionName));
}

export const getNftByIdFromCollectionName = (collectionName: string, nonce: number) => {
    return axios.get(getNftByIdFromCollectionNameUrl(collectionName, nonce));
}
