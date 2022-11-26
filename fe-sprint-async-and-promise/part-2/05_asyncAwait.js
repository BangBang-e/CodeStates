const path = require('path');
const { result } = require('underscore');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  // * async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다.
  // * await 키워드만 이용해 배열이 리턴되어야 합니다.
  // * user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다.
  let user1 = await getDataFromFilePromise(user1Path);
  let user2 = await getDataFromFilePromise(user2Path);
  
  let merged = `[${user1},${user2}]`;
  return JSON.parse(merged);
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}