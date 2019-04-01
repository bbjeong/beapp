pragma solidity >=0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


/**
 * @title BET
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
 contract BET is ERC20, ERC20Detailed {
    uint8 public constant DECIMALS = 18;
    uint256 public constant INITIAL_SUPPLY = 500000 * (10 ** uint256(DECIMALS));
    address owner;
    
    mapping(address => uint) public balancesUser;

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () public ERC20Detailed("BehavioralEconomicsToken", "BET", DECIMALS) {
        _mint(msg.sender, INITIAL_SUPPLY);
        owner = msg.sender;
    }
    
    function balanceOfUser(address account) public view returns (uint256) {
        return balancesUser[account];
    }
    
    function transfer(address to, uint256 value) public returns (bool) {
        _transfer(owner, to, value);
        balancesUser[to] = balancesUser[to] + value;
        return true;
    }
}
