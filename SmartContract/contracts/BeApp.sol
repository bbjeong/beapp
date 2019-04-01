pragma solidity >=0.5.0;

import "./BET.sol";

contract BeApp is BET {
    
    uint public userIndex;

    mapping(address => mapping(uint => User)) userInfo;
    mapping(string => uint) userEmailToId;
    mapping(uint => address) userIdToInfo;
    mapping(uint => Answer) answerValue;
    mapping(address => uint) userAddressToId;
    
    struct Answer2 { // string 섞인 Answer
        uint answer1;
        string answer2;
        string answer3;
        uint answer4;
        uint answer5;
        uint answer6;
        uint answer7;
        uint answer8;
        uint answer9;
        uint answer10;
        string answer11;
    }
    
    struct Answer {
        uint answer1;
        uint answer2;
        uint answer3;
        uint answer4;
        uint answer5;
        uint answer6;
        uint answer7;
        uint answer8;
        uint answer9;
        uint answer10;
        uint answer11;
    }
    
    struct User {
        uint id;
        uint age;
        uint amountBET;
        string email;
        string ipfsValue;
        bool gender;
        address account;
    }
    
    event NewUser(uint _userId, uint _age, uint _amountBET, string _email, string _ipfsValue, bool _gender, address _account);
    event NewAnswer(uint _amountBET, uint _answer1, uint _answer2, uint _answer3, uint _answer4, uint _answer5, uint _answer6, uint _answer7, uint _answer8, uint _answer9, uint _answer10, uint _answer11);
    // event NewAnswer(uint _amountBET, uint _answer1, string _answer2, string _answer3, uint _answer4, uint _answer5, uint _answer6, uint _answer7, uint _answer8, uint _answer9, uint _answer10, string _answer11);

    constructor() public {
        userIndex = 0;
    }
    
    function addUser(uint _age, string memory _email, bool _gender) public {
        userIndex += 1;
        User memory user = User(userIndex, _age, 0, _email, "", _gender, msg.sender);
        userInfo[msg.sender][userIndex] = user;
        userEmailToId[_email] = userIndex;
        userIdToInfo[userIndex] = msg.sender;
        userAddressToId[msg.sender] = userIndex;
        balancesUser[msg.sender] = 0;
        emit NewUser(userIndex, _age, 0, _email, "", _gender, msg.sender);
    }
    
    function addAnswer(uint _amountBET, string memory _ipfsValue, uint _answer1, uint _answer2, uint _answer3, uint _answer4, 
        uint _answer5, uint _answer6, uint _answer7, uint _answer8, uint _answer9, uint _answer10, uint _answer11) public {
        Answer memory answer = Answer(_answer1, _answer2, _answer3, _answer4, _answer5, _answer6, _answer7, _answer8, _answer9, _answer10, _answer11);
        User memory user = userInfo[msg.sender][userAddressToId[msg.sender]];
        answerValue[userIndex] = answer;
        user.amountBET = _amountBET;
        user.ipfsValue = _ipfsValue;
        userInfo[msg.sender][userIndex] = user;
        transfer(msg.sender, user.amountBET);
        emit NewUser(user.id, user.age, user.amountBET, user.email, user.ipfsValue, user.gender, msg.sender);
        emit NewAnswer(_amountBET, _answer1, _answer2, _answer3, _answer4, _answer5, _answer6, _answer7, _answer8, _answer9, _answer10, _answer11);
        }
    
    function getUser(string memory _userEmail) public view returns (uint, uint, uint, string memory, string memory, bool, address) {
        User memory user = userInfo[userIdToInfo[userEmailToId[_userEmail]]][userEmailToId[_userEmail]];
        return (user.id, user.age, user.amountBET, user.email, user.ipfsValue, user.gender, user.account);
    }
    
    
    function getAnswer(uint _userIndex) public view returns (uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) {
        Answer memory answer = answerValue[_userIndex];    
        return (answer.answer1, answer.answer2, answer.answer3, answer.answer4, answer.answer5, answer.answer6, answer.answer7, answer.answer8, answer.answer9, answer.answer10, answer.answer11);
    }
}