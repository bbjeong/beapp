# beapp
이더리움 연구회 5기 행동경제학팀 (be-app) github 저장소 > SmartContract 폴더 

ERC20 토큰 발행 참고
https://github.com/OpenZeppelin/openzeppelin-solidity

truffle migrate

truffle console

(다른 창에서) ganache-cli

-> ganache-cli 실행시 나오는 port와 truffle-config.js의 port 번호가 같아야 오류 없이 실행됩니다! (기본 8545)

BeApp.deployed().then(function(f) {f.addUser('20','a@a.a','a','0').then (function(f) {console.log(f)})})

BeApp.deployed().then(function(f) {f.getUser('a@a.a').then (function(f) {console.log(f)})})

유저 등록, 설문조사 응답 내용 저장, 유저 정보 불러오기, 유저 응답 내용 불러오기

BET 토큰 생성까지 진행

여러명이 동시에 설문조사를 진행해도 설문조사를 진행하는 msg.sender(address)에 따라 응답 내용이 저장됩니다!
