import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { collections } from "../../../config";
import CollectionItem from "../CollectionItem";

type CollectionsListProps = {
  isSearchable?: boolean;
};

const CollectionsList: React.FC<CollectionsListProps> = ({
  isSearchable = true,
}) => {
  const [copyCollections, setCopyCollection] = useState(collections);
  const [searchCollection, setSearchCollection] = useState<string>("");

  useEffect(() => {
    const value = searchCollection.toLowerCase();
    if (value === "") {
      setCopyCollection(collections);
    } else {
      const _collections = collections.filter((x) =>
        x.name.toLowerCase().includes(value)
      );
      setCopyCollection(_collections);
    }
  }, [searchCollection]);

  return (
    <>
      {isSearchable && isSearchable && (
        <div className="mb-8 text-center max-w-lg mx-auto">
          <label htmlFor={"txt-searchCollection"} className="block mb-1">
            Search for a NFT collection
          </label>
          <input
            id={"txt-searchCollection"}
            type="text"
            value={searchCollection}
            onChange={(e) => setSearchCollection(e.target.value)}
            className="w-full px-2 py-1 rounded outline-none bg-dark-600 border border-primary-500"
          />
        </div>
      )}
      <div className="grid grid-cols-12 gap-x-4 gap-y-6 justify-items-stretch py-4">
        {copyCollections.map((collection) => {
          return (
            <CollectionItem
              hoverEffect={true}
              collection={collection}
              key={collection.id}
            />
          );
        })}
      </div>
    </>
  );
};

CollectionsList.propTypes = {
  //
};

export default CollectionsList;
