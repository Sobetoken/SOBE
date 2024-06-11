// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoberSloth is ERC20, Ownable {
    uint256 private constant TOTAL_SUPPLY = 369000000000 * 10**18; // 369 billion tokens

    constructor(address initialOwner) ERC20("Sober Sloth", "SOBE") {
        // Mint 10% of the total supply to the founder (initialOwner)
        uint256 founderShare = TOTAL_SUPPLY / 10;
        _mint(initialOwner, founderShare);

        // Mint 90% of the total supply to this contract to be distributed to contributors
        uint256 communityShare = TOTAL_SUPPLY - founderShare;
        _mint(address(this), communityShare);

        // Transfer ownership to the initial owner
        transferOwnership(initialOwner);
    }

    function distribute(address[] calldata recipients, uint256[] calldata amounts) external onlyOwner {
        require(recipients.length == amounts.length, "Recipients and amounts must be the same length");

        for (uint256 i = 0; i < recipients.length; i++) {
            _transfer(address(this), recipients[i], amounts[i]);
        }
    }

    function renounceOwnershipAfterDistribution() external onlyOwner {
        require(balanceOf(address(this)) == 0, "All tokens must be distributed before renouncing ownership");
        renounceOwnership();
    }
}
