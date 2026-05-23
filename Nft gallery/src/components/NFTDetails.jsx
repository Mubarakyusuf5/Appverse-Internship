import React from "react";

export const NFTDetails = ({ selectedNFT }) => {
  if (!selectedNFT) {
    return <p>Select an NFT to view details.</p>;
  }

  return (
    <div className="details">
      <h2>{selectedNFT.name}</h2>

      <img
        src={selectedNFT.image}
        alt={selectedNFT.name}
      />

      <p>Artist: {selectedNFT.artist}</p>
      <p>Price: {selectedNFT.price}</p>
    </div>
  );
};

