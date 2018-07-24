let hash = require('object-hash');

class BlockChainDemo{

    constructor(){
        this.chain = [];
        this.current_transaction = [];
    }

    addNewBlock(prevHash){
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transaction: this.current_transaction,
            prevHash
        }
        this.chain.push(block);
        this.current_transaction = [];
        this.hash = hash(block);

        return block;
    }

    addNewTransaction(sender, recipient, amount ){
        this.current_transaction.push({sender , recipient, amount});
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    isEmpty(){
        return this.chain.length = 0;
    }
}

module.exports =  BlockChainDemo;