// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./NFTLazy.sol";

contract LazyNFT is NFTLazy {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) NFTLazy(name) {}
}