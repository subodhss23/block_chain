const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'IHKLDSFH934LKHDOU345' , ' 2303LSJDLFH9486ZEMMSO');
bitcoin.createNewBlock(1111, 'SDJKHF235097DFLKGHN2' , ' KLHQ99345JLKDFK345NMK');
bitcoin.createNewBlock(6823, '1513SDE4DSGFDG544237' , ' 550299DDSFGSDFQQQP120');

console.log(bitcoin);