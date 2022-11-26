const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  // * Promise 형태로 리턴되어야 합니다.
  // * Promise.all을 사용해서 풀어야 합니다.
  // * user1.json의 내용과 user2.json 내용을 합쳐 객체로 리턴되어야 합니다.
  // return Promise.all([
  //   getDataFromFilePromise(user1Path),
  //   getDataFromFilePromise(user2Path)
  // ])
  // .then(([user1, user2]) => {
  //   return `[${user1},${user2}]`;
  // })
  // .then((merged) => {
  //   return JSON.parse(merged)
  // })

  return Promise.all([
    getDataFromFilePromise(user1Path),
    getDataFromFilePromise(user2Path)
  ])
  .then((res) => {
    let result = '['+res[0]+','+res[1]+']'
    return JSON.parse(result)
  })
}

readAllUsers()

module.exports = {
  readAllUsers
}