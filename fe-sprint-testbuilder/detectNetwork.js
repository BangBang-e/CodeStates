/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
   * 'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
   * 이 글을 읽으셨다면, detectNetwork함수가 'Diner's Club', 'American Express'를
   * 정확히 검사할 수 있도록 만들고 브라우저 console 화면으로 돌아가세요.
   */
  if (cardNumber.length === 14) {
    if (cardNumber.split('').splice(0, 2).join('') === '38' ||
      cardNumber.split('').splice(0, 2).join('') === '39') {
      return 'Diner\'s Club'
    }
  }
  if (cardNumber.length === 15) {
    if (cardNumber.split('').splice(0, 2).join('') === '34' ||
      cardNumber.split('').splice(0, 2).join('') === '37') {
      return 'American Express'
    }
  }
  if (cardNumber.length === 13 ||
    cardNumber.length === 16 ||
    cardNumber.length === 19) {
    if (cardNumber.split('').splice(0, 1).join('') === '4') {
      return 'Visa'
    }
  }
  if (cardNumber.length === 16) {
    if (cardNumber.split('').splice(0, 2).join('') === '51' ||
      cardNumber.split('').splice(0, 2).join('') === '52' ||
      cardNumber.split('').splice(0, 2).join('') === '53' ||
      cardNumber.split('').splice(0, 2).join('') === '54' ||
      cardNumber.split('').splice(0, 2).join('') === '55') {
      return 'MasterCard'
    }
  }
  if (cardNumber.length === 16 || cardNumber.length === 19) {
    if (cardNumber.split('').splice(0, 2).join('') === '65' ||
      cardNumber.split('').splice(0, 4).join('') === '6011' ||
      cardNumber.split('').splice(0, 3).join('') === '644' ||
      cardNumber.split('').splice(0, 3).join('') === '645' ||
      cardNumber.split('').splice(0, 3).join('') === '646' ||
      cardNumber.split('').splice(0, 3).join('') === '647' ||
      cardNumber.split('').splice(0, 3).join('') === '648' ||
      cardNumber.split('').splice(0, 3).join('') === '649') {
      return 'Discover'
    }
  }
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
