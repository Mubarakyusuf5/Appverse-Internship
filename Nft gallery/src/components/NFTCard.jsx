import React from "react";

export const NFTCard = ({ nft, showDetails }) => {
  return (
    <div className="card">
      <img src={nft.image} alt={nft.name} />

      <h3>{nft.name}</h3>
      <p>Artist: {nft.artist}</p>
      <p>Price: {nft.price}</p>

      <button onClick={() => showDetails(nft)}>
        View Details
      </button>
    </div>
  );
};

