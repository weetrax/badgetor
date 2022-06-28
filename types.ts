export interface Medium {
  url: string;
  originalUrl: string;
  thumbnailUrl: string;
  fileType: string;
  fileSize: number;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Rarity {
  avgRarity: number;
  statRarity: number;
  rarityScore: number;
  rarityScoreNormed: number;
  usedTraitsCount: number;
}

export interface Metadata {
  description: string;
  dna: string;
  attributes: Attribute[];
  rarity: Rarity;
  compiler: string;
}

export interface NFT {
  identifier: string;
  collection: string;
  timestamp: number;
  attributes: string;
  nonce: number;
  type: string;
  name: string;
  creator: string;
  royalties: number;
  uris: string[];
  url: string;
  media: Medium[];
  isWhitelistedStorage: boolean;
  tags: string[];
  metadata: Metadata;
  owner: string;
  supply: string;
  ticker: string;
}

export interface Assets {
  website: string;
  description: string;
  status: string;
  pngUrl: string;
  svgUrl: string;
  lockedAccounts: string[];
  extraTokens: string[];
}

export interface Roles {
  address: string;
  canCreate: boolean;
  canBurn: boolean;
  canAddQuantity: boolean;
  canUpdateAttributes: boolean;
  canAddUri: boolean;
  canTransferRole: boolean;
  roles: string[];
}

export interface Collection {
  collection: string;
  type: string;
  name: string;
  ticker: string;
  owner: string;
  timestamp: number;
  canFreeze: boolean;
  canWipe: boolean;
  canPause: boolean;
  canTransferNftCreateRole: boolean;
  decimals: number;
  assets: Assets;
  roles: Roles;
}