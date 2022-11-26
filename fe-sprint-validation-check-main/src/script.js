// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username');

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

let elPassword = document.querySelector('#password');
let elPasswordRe = document.querySelector('#password-retype');
let elMisMatchMessage = document.querySelector('.mismatch-message');

function isMatch (password1, password2) {
  if(password1 === password2){
    return true;
  }else{
    return false;
  }
}

elInputUsername.onkeyup = function(){
  // console.log(elInputUsername.value);

  if(isMoreThan4Length(elInputUsername.value)){
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  }else{
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

function isMoreThan4Length(value){
  return value.length >= 4;
}

elPasswordRe.onkeyup = function(){
  if(isMatch(elPassword.value, elPasswordRe.value)){
    elMisMatchMessage.classList.add('hide');
  }else{
    elMisMatchMessage.classList.remove('hide');
    return false;
  }
  return true;
}