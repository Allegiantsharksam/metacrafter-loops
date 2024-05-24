let nftcs=[];
function mintNFT(name, creator, description, dateCreated, attributes){
  const nft = {
    name:name,
    creator:creator,
    description:description,
    dateCreated:dateCreated,
     attributes: attributes
  };
  nftcs.push(nft);
  console.log(`Minted:${name}`);
}function listNFTs(){
  if (nftcs.length===0) {
    console.log("No NFT has been minted yet.");
    return;
  }
  nftcs.forEach((nft, index)=>{
    console.log(`NFT${index+1}:`);
    console.log("Name: "+nft.name);
    console.log("Creator: "+nft.creator);
    console.log("Description: "+nft.description);
    console.log("Date Created: "+nft.dateCreated);
  });
}
function getTotalSupply() {
  return nftcs.length;
}
mintNFT("GTA", "Rockstar", "A unique CryptoPunk", "2022-07-05", { rarity: "Rare", color: "Blue" });
mintNFT("Bored Ape", "Yuga Labs", "A bored ape yacht club NFT", "2024-01-02", { rarity: "Rare", color: "Blue" });
console.log("\nList of all NFTs:");
listNFTs();
console.log("\nTotal number of NFTs minted:");
console.log(getTotalSupply());
mintNFT("Meebit", "Larva Labs", "A 3D voxel character", "2024-01-04", { rarity: "Rare", color: "Blue" });
mintNFT("World of Women", "WoW Foundation", "Celebrating representation and inclusivity", "2024-01-05", { rarity: "Rare", color: "Blue" });
console.log("\nUpdated list of all NFTs:");
listNFTs();
console.log("\nTotal number of NFTs minted:", getTotalSupply())
