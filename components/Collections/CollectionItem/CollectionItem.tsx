import * as React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

type CollectionItemProps = {
  collection: any;
  hoverEffect: boolean;
};

const CollectionItem: React.FC<CollectionItemProps> = ({
  collection,
  hoverEffect,
}) => {
  return (
    <div
      className={`col-span-3 md:col-span-3 xl:col-span-2 translation-all duration-200 ease-in-out ${
        hoverEffect && "hover:-translate-y-2"
      }`}
    >
      <Link href={`/collection/${collection.id}`}>
        <a>
          <img src={collection.imgUrl} className="badgetor-img rounded-t" />
          <div className="text-center bg-dark-600 rounded-b p-2 truncate">
            {collection.name}
          </div>
        </a>
      </Link>
    </div>
  );
};

CollectionItem.propTypes = {
  //
};

export default CollectionItem;
