// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GRAINToken is ERC20, Ownable {
    constructor() ERC20("GRAIN", "GRAIN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}