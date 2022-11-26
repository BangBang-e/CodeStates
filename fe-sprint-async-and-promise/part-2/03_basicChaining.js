const path = require('path');
const { stringify } = require('querystring');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // * 체이닝의 결과가 Promise 형태로 리턴되어야 합니다.
  // * user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다.
  // * fs module을 직접 사용하지 말고, getDataFromFilePromise을 두 번 사용해야 합니다.
  // * Promise.all 또는 async/await을 사용하지 않고 풀어보세요.
  // let arr = [];
  // return getDataFromFilePromise(user1Path).then((user1) => {
  //   arr.push(JSON.parse(user1)) // JSON.parse -> 문자열을 다시 객체로, user1
  //   return getDataFromFilePromise(user2Path).then((user2) => {
  //     arr.push(JSON.parse(user2)) // JSON.parse -> 문자열을 다시 객체로, user2
  //     return arr;
  //   })  
  // })

  return getDataFromFilePromise(user1Path)
  .then((user1data) => {
    return getDataFromFilePromise(user2Path)
    .then((user2data) => {
      let result = '['+user1data+','+user2data+']'
      return JSON.parse(result)
    })  
  })
}

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}