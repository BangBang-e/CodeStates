const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다.
  // * 파일을 읽고 나서 callback이 실행되어야 합니다.
  // * 에러가 발생할 경우, callback 첫번째 인자에 에러 객체가 전달되어야 합니다.
  // * callback 두번째 인자에 파일 내용이 전달되어야 합니다.
  // node.js 모듈 중 fs의 readFile 메서드를 실행
  // readFile(path = 스트링 혹은 디렉토리, option = utf-8, ...
  // ...callback(err, data) => (if err)일 때 콜백함수의 전달인자로...
  // ...err가 전달되어야 함) else일때 콜백함수의 전달인자가 (err, data))
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
      callback(err, null)
    }else{
      callback(null, data)
    }
  })
}
getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
