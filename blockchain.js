// constructor (blockchain dataStructure)
function Blockchain(){
	this.chain = [];				// all of the blocks we mine will be stored in this array as a chain
	this.newTransactions = [];		//this is where we will hold all the new transaction that we create, 
									//before they are placed in block and mined
}

// if you feel comfortable with class
/* class Blockchain{
	constructor(){
	this.chain = [];
	this.newTransactions =[];
	}
	//.... all other methods will go here
}*/


// creates new block
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
		const newBlock = {								
			index: this.chain.length + 1,			//block number, in a chain
			timeStamp: Date.now(),					//when the block was created
			transaction: this.newTransactions,  	//all transaction in this block show be new transaction in a block
			nonce: nonce,							//proof of work, number
			hash: hash,								//data from new block
		};
}