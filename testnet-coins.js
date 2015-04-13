// FILENAME:  1-Testnet-Coins.js
// Great teaching tool to procure Keys/Addresses

/* Gameplan for this Javascript:

::All Things related to Coins::

Using only BITCORE!!! www.bitcore.io

On the TESTNET

1)  Create a new Private Key in the various formats
2)  Create from this a Public Key in the various formats
3)  Create a Bitcoin Address
4)  Validate everything

*/

var bitcore = require("bitcore");			//Needed

//STEP ONE:  Getting a PRIVATE KEY
//
//I don't think that SPECIFICATION of TESTNET is Needed:
//
var privateKey = new bitcore.PrivateKey(bitcore.Networks.testnet);            //Needs the bitcore. prefix
var privateKeyWIF = privateKey.toWIF(bitcore.Networks.testnet);               //Better do this now

//Not going to use this
//
if(bitcore.PrivateKey.isValid(privateKey, bitcore.Networks.testnet)) {
}

//Will Use this though
//
var error = bitcore.PrivateKey.getValidationError(privateKey, bitcore.Networks.testnet);

if (error) {
	 // handle the error
	console.log(":::Problem with the Private Key DO NOT USE:::");
	console.log("The ERROR is:  " + error);
	console.log("");

}


//STEP TWO:  Getting a PUBLIC KEY
//
var publicKey = new bitcore.PublicKey(privateKey, bitcore.Networks.testnet);    //Now that PUB key

//Validating that this is in fact a GOOD Public Key
//
if (bitcore.PublicKey.isValid(publicKey, bitcore.Networks.testnet)){
	  // valid public key
	//console.log("This is a valid Public Key");
} else {

	console.log(":::Problem with the Public Key DO NOT USE:::");
	console.log("");

}
 

//STEP THREE:  Getting a BITCOIN ADDRESS
//


var bitcoinAddress = new bitcore.Address(publicKey, bitcore.Networks.testnet);

//Validating the Address
//
// validate that an input field is a valid testnet address
if (bitcore.Address.isValid(bitcoinAddress, bitcore.Networks.testnet)) {

	//console.log("This is a valid Bitcoin Address");

} else {

	console.log(":::Problem with the Bitcoin Address DO NOT USE:::");
	console.log("");
}


//LAST STEP:  Output everything
//

console.log('===============================================================================');
console.log('===============================================================================');
console.log('Your Private Key       :  ' + privateKey);
console.log('Your Private Key  (WIF):  ' + privateKeyWIF);



console.log('===============================================================================');
console.log('Your Public Key        :  ' + publicKey);



console.log('===============================================================================');
console.log('Your Address           :  ' + bitcoinAddress);
console.log('===============================================================================');
console.log('===============================================================================');



//Jan 17 2015