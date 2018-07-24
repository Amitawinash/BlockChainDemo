let BlockChainDemo = require("./index");
let hash = require("object-hash");

let blockChainDemo = new BlockChainDemo;

let PROOF = 50000;

let validProof = (proof) => {
    let guessHash = hash(proof);
    console.log(" HASH : ", guessHash);

    return guessHash == hash(PROOF);
    
};

let proofOfWork = () => {
    let proof = 0;
    while (true) {
        if (!validProof(proof)) {
            proof++;
        }else{
            break;
        }
    }
    return proof;
}

if (proofOfWork() == PROOF) {
    blockChainDemo.addNewTransaction("Jone","Joe",200);

    let prevHash = blockChainDemo.lastBlock() ? blockChainDemo.lastBlock.hash  : null;
    blockChainDemo.addNewBlock(prevHash);
    
}

console.log("Chain  : ", blockChainDemo.chain);