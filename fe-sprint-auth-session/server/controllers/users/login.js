const { USER_DATA } = require('../../db/data');
module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };
  if (!userInfo.id) {
    res.status(401).send("Not Authorized")
  } else if (checkedKeepLogin) {
    req.session.sessionId = userInfo.id

    // 세션 구조 들여다보기 -> 터미널에 표시됩니다
    console.log(req.session)

    // 쿠키 옵션 설정하기
    req.session.cookie.maxAge = 1000 * 60 * 30

    res.redirect('/userinfo')

  } else {
    req.session.sessionId = userInfo.id
    res.redirect('/userinfo')
  }
  /*
   * TODO: 로그인 로직을 구현하세요.
   *
   * userInfo에는 요청의 바디를 이용해 db에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo를 출력해보세요.
   * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야합니다.
   * 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야합니다.
   *
   * 로그인 성공 시에는 클라이언트에 세션 아이디를 전송해야합니다.
   * req.session을 사용해 세션 객체에 userInfo.id를 저장하세요.
   * 영속성있는 쿠키로 세션 아이디를 보내려면 max-age 또는 expires 옵션을 설정하세요.
   *
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */
};
