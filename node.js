// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the array above.
function mintNFT(name, creator, description, dateCreated, attributes) {
  const nft = {
    name: name,
    creator: creator,
    description: description,
    dateCreated: dateCreated,
    attributes: attributes
  };
  nftCollection.push(nft);
  console.log(`Minted: ${name}`);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  if (nftCollection.length === 0) {
    console.log("No NFTs have been minted yet.");
    return;
  }

  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log("Name: " + nft.name);
    console.log("Creator: " + nft.creator);
    console.log("Description: " + nft.description);
    console.log("Date Created: " + nft.dateCreated);
    console.log("Attributes: " + JSON.stringify(nft.attributes, null, 2));
    console.log("-------------------");
  });
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT("CryptoPunk", "Larva Labs", "A unique CryptoPunk", "2024-01-01", { rarity: "Rare", color: "Blue" });
mintNFT("Bored Ape", "Yuga Labs", "A bored ape yacht club NFT", "2024-01-02", { mood: "Bored", accessory: "Hat" });
mintNFT("Art Blocks", "Art Blocks Inc", "A generative art NFT", "2024-01-03", { algorithm: "Fractal", theme: "Abstract" });

// Listing all minted NFTs
console.log("\nList of all NFTs:");
listNFTs();

// Printing the total number of NFTs minted
console.log("\nTotal number of NFTs minted:");
console.log(getTotalSupply());

// Minting more NFTs to demonstrate the functions further
mintNFT("Meebit", "Larva Labs", "A 3D voxel character", "2024-01-04", { type: "Voxel", character: "Humanoid" });
mintNFT("World of Women", "WoW Foundation", "Celebrating representation and inclusivity", "2024-01-05", { empowerment: "High", diversity: "Wide" });

// Listing all NFTs again to include the new ones
console.log("\nUpdated list of all NFTs:");
listNFTs();

// Printing the updated total number of NFTs minted
console.log("\nUpdated total number of NFTs minted:");
console.log(getTotalSupply());
