const fs = require("fs");

const getDataFromFilePromise = filePath => {
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  // * Promise 형태로 리턴되어야 합니다.
  // * then 블록을 통하여 파일 내용이 전달되어야 합니다.
  // * 에러가 발생할 경우, catch 블록을 통하여 에러 객체가 전달되어야 합니다.

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

getDataFromFilePromise('README.md').then(data => console.log(data));
// getDataFromFilePromise('README.md').then(data => console.log(data)).catch((err)=>{
//   console.log(err);
// });

module.exports = {
  getDataFromFilePromise
};
