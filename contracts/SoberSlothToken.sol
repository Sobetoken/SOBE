// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoberSlothToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 369 * 10**9 * 10**18; // 369 billion tokens

    constructor() ERC20("Sober Sloth", "SOBE") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    function renounceOwnership() public override onlyOwner {
        super.renounceOwnership();
    }
}
