// SPDX-License-Identifier: ONEIRO-HACKER-1.0
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title OneiAirdrop
 * @dev Airdrop based on dream resonance, not snapshots
 *      Rewards: Dreamers, Thinkers, Seers, Echoes, Void
 */
contract OneiAirdrop is Ownable {
    IERC20 public dreamToken;
    mapping(address => bool) public hasClaimedDream;

    uint256 public constant DREAM_AIRDROP = 1000 * 10**18;

    constructor(address _dreamToken) {
        dreamToken = IERC20(_dreamToken);
    }

    function claimDream() external {
        require(!hasClaimedDream[msg.sender], "Already claimed");
        // In reality: check dream submission via external call
        hasClaimedDream[msg.sender] = true;
        dreamToken.transfer(msg.sender, DREAM_AIRDROP);
    }
}