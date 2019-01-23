/**
 * @file rpcinfo.js
 * @fileOverview Class for the burrow Rpcinfo.
 * @author Pouladzade@gmail.com
 * @module RpcInfo
 */

var Server = require('./server');

module.exports = class RpcInfo {

    constructor(burrowUrl) {
        this.server = new Server(burrowUrl);
    }

    getAccounts(filter, cb) {
        parameter = {};
        this.server.serverPost("accounts", parameter, cb)
    }

    getAccount(address, cb) {
        if (!this.isAddress(address)) {
            throw "method:getDumpStorage error:address is not a proper string."
        }
        let parameters = {
            "address": address
        };
        this.server.serverPost("burrow.account", parameters, cb);
    };

    getDumpStorage(address, cb) {
        if (!this.isAddress(address)) {
            throw "method:getDumpStorage error:address is not a proper string."
        }
        parameter = {
            "address": address
        };
        this.server.serverPost("dump_storage", parameter, cb)
    }

    getStorage(address, key, cb) {
        if (!this.isAddress(address)) {
            throw "method:getDumpStorage error:address is not a proper string."
        }
        parameter = {
            "address": address,
            "key": key
        };
        this.server.serverPost("storage", parameter, cb);
    }

    getStatus(block_time_within, block_seen_time_within, cb) {
        let parameters = {
            block_time_within,
            block_seen_time_within
        }
        this.server.serverPost("status", parameters, cb);
    }

    getChainId(cb) {
        let parameters = {};
        this.server.serverPost("chain_id", parameters, cb);
    }

    getGenesis(cb) {
        let parameters = {};
        this.server.serverPost("genesis", parameters, cb);
    }

    getBlocks(minHeight, maxHeight, cb) {
        let parameters = {
            minHeight,
            maxHeight,
            "filters": []
        }
        this.server.serverPost("blocks", parameters, cb);
    }

    getBlock(height, cb) {
        let parameters = {
            "height": height
        }
        this.server.serverPost("block", parameters, cb);
    }

    getValidators(cb) {
        let parameters = {}
        this.server.serverPost("validators", parameters, cb);
    }

    getConsensus(cb) {
        let parameters = {}
        this.server.serverPost("consensus", parameters, cb);
    }

    getNetworkInfo(cb) {
        let parameters = {}
        this.server.serverPost("network", parameters, cb);
    }

    getName(name, cb) {
        let parameters = {
            "name": name
        }
        this.server.serverPost("name", parameters, cb);
    }

    getUnconfirmedTxs(maxTxs, cb) {
        let parameters = {
            "maxTxs": maxTxs
        }
        this.server.serverPost("unconfirmed_txs", parameters, cb);
    }

    getNames(cb) {
        let parameters = {}
        this.server.serverPost("names", parameters, cb);
    }

    isAddress(address) {
        // check if it has the basic requirements of an address
        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
            return false;
            // If it's ALL lowercase or ALL upppercase
        } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
            return true;
            // Otherwise check each case
        } else {
            return checkAddressChecksum(address);
        }
    }
}