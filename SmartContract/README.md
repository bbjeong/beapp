# beapp
이더리움 연구회 5기 행동경제학팀 (be-app) github 저장소 > SmartContract 폴더 

ERC20 토큰 발행 참고
https://github.com/OpenZeppelin/openzeppelin-solidity

truffle migrate

truffle console

// 임의의 값으로 truffle 환경에서 구동..
BeApp.deployed().then(function(f) {f.addUser('20','a@a.a','a','0').then (function(f) {console.log(f)})})
