let nftcs=[];
function mintNFT(name, creator, description, dateCreated, attributes){
  const nft = {
    name:name,
    creator:creator,
    description:description,
    dateCreated:dateCreated,
     attributes:attributes
  };

  
  nftcs.push(nft);
  console.log(`Minted:${name}`);
}


function listNFTs(){
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


mintNFT("GTA", "Rockstar", "A unique Cryptogame", "2022-07-05",{rarity:"Rare", color: "Gold"});
mintNFT("Watch dogs", "Sleeping dogs", "A cyber NFT", "2021-09-08",{ rarity:"Legendary", color: "Blue"});
console.log("\nList of all NFTs:");
listNFTs();
console.log("\nTotal number of NFTs minted:", getTotalSupply())


mintNFT("COC", "Supercell", "A phone NFT", "2022-05-21",{ rarity:"Common",color: "Green"});
mintNFT("Avengers", "Marvels", "Superpowered NFT", "2020-11-25",{rarity: "Legendary",color: "Red"});
console.log("\nUpdated list of all NFTs:");
listNFTs();
console.log("\nTotal number of NFTs minted:", getTotalSupply())
