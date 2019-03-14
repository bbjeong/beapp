pragma solidity >=0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract SimpleToken123 is ERC20, ERC20Detailed {
    uint8 public constant DECIMALS = 18;
    uint256 public constant INITIAL_SUPPLY = 100000 * (10 ** uint256(DECIMALS));
    
    mapping(address => uint) public balancesUser;

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () public ERC20Detailed("SimpleToken123", "SIM12", DECIMALS) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
    
    function balanceOfUser(address account) public view returns (uint256) {
        return balancesUser[account];
    }
    
    function transfer(address to, uint256 value) public returns (bool) {
        _transfer(msg.sender, to, value);
        balancesUser[to] = balancesUser[to] + value;
        return true;
    }
}
