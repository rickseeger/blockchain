var bitcoin = require('bitcoinjs-lib');

//key = bitcoin.ECKey.makeRandom().pub.getAddress().toString()
key = bitcoin.ECKey.makeRandom().pub.getAddress().toString()

tx = new bitcoin.Transaction();
tid = new Buffer('abceaf2cf4ebdfab90f1470aafd48ba78db02f4fac899ec46cdc755c734de1cd');
dest = new Buffer('2MtVvRbFuWFkwdwakg5NNADpuWYGWB5yj77');

tx.addInput(tid, 0);
tx.addOutput(dest, 50000);

// embed data as OP_RETURN [hexdata]
data = new Buffer("Ignorance is bliss");

ret = bitcoin.Script.fromChunks([bitcoin.opcodes.OP_RETURN, data]);
tx.addOutput(ret, 0);

tx.sign(0, key);

tx.toHex()
