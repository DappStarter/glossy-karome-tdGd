require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name remember magic evil hope civil army giggle'; 
let testAccounts = [
"0xae8b5fca5459f1bb804cce6b1bd1cb38cec19c6650355af8e08c50c379937fa0",
"0x942b9059f51abedb8532c8a48cbc250bc36b73b002b82d20ba2eb84d29bf3630",
"0x7ecfc0f4a235901be5cd4548887223333da4f14fce20877357039cf90dc7affb",
"0x3986240c80a7046604271290572346a7b08ab879394eb188883a8d20e3aec270",
"0xbda7a802ddd015dffb0125c9678df3f2a67be79c9034aae00e285d55eaa789e1",
"0xaa4feac993d8c1a51c502c538a94ad2214558a49e182d0f4db7288918e2a93d6",
"0xe5db2b6f3f36ae2697c604030c0fc63252d5013be588e06b50d3991897b3c86c",
"0xf833b3355744a207c1f63cc8ce0282c0aa682885f02c2d7db361b04ad064c547",
"0x53512dd2285a2e1e0a0c8b1af5667a55cd33bb7fac5e86c8da079cc958a4e933",
"0xba80036952d580749326ad094ea1a0046cdca2467dc08d7d291abb5e0fa4ff1a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


