pragma solidity >=0.5.0;

import "./SimpleToken.sol";

contract BeApp is SimpleToken {
    
    uint public userIndex;
    
    mapping(address => mapping(uint => User)) userInfo;
    mapping(string => uint) userEmailToId;
    mapping(uint => address) userIdToInfo;
    
    struct User {
        uint id;
        uint age;
        string email;
        string ipfsValue;
        bool gender;
        address account;
    }
    
    event NewUser(uint _userId, uint _age, string _email, string _ipfsValue, bool _gender, address _account);

    constructor() public {
        userIndex = 0;
    }
    
    function addUser(uint _age, string memory _email, string memory _ipfsValue, bool _gender) public {
        userIndex += 1;
        User memory user = User(userIndex, _age, _email, _ipfsValue, _gender, msg.sender);
        userInfo[msg.sender][userIndex] = user;
        userEmailToId[_email] = userIndex;
        userIdToInfo[userIndex] = msg.sender;
        balancesUser[msg.sender] = 0;
	emit NewUser(userIndex, _age, _email, _ipfsValue, _gender, msg.sender);
    }
    
    function getUser(string memory _userEmail) public view returns (uint, uint, string memory, string memory, bool, address) {
        User memory user = userInfo[userIdToInfo[userEmailToId[_userEmail]]][userEmailToId[_userEmail]];
        // User memory user = userInfo[userIdInAccount[_userId]][_userId];
        return (user.id, user.age, user.email, user.ipfsValue, user.gender, user.account);
    }
}
