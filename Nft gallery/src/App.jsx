import React, { useState } from "react";
import {NFTCard} from "./components/NFTCard";
import {NFTDetails} from "./components/NFTDetails";
import nftData from "./components/nftData.json";
import "./App.css";

export const App = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter NFTs
  const filteredNFTs = nftData.filter((nft) =>
    nft.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort NFTs
  const sortedNFTs = [...filteredNFTs].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="app">
      <h1>NFT Gallery</h1>

      {/* Search */}
      <input
      className="search"
        type="text"
        placeholder="Search NFT..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select className="sort" onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      {/* NFT Grid */}
      <div className="gallery">
        {sortedNFTs.map((nft) => (
          <NFTCard
            key={nft.id}
            nft={nft}
            showDetails={setSelectedNFT}
          />
        ))}
      </div>

      {/* Details */}
      <NFTDetails selectedNFT={selectedNFT} />
    </div>
  );
};

