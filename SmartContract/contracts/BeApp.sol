pragma solidity >=0.5.0;

contract BeApp {
    
    uint public userIndex;
    
    mapping(address => mapping(uint => User)) userInfo;
    mapping(uint => address) userIdInAccount;
    
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
        userIdInAccount[userIndex] = msg.sender;
				emit NewUser(userIndex, _age, _email, _ipfsValue, _gender, msg.sender);
    }
    
    function getUser(uint _userId) public returns (uint, uint, string memory, string memory, bool, address) {
        User memory user = userInfo[userIdInAccount[_userId]][_userId];
        return (user.id, user.age, user.email, user.ipfsValue, user.gender, user.account);
    }
}