const { USER_DATA } = require('../../db/data');
// JWT는 generateToken으로 생성할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  // checkedKeepLogin이 false라면 Access Token만 보내야합니다.
  // checkedKeepLogin이 true라면 Access Token과 Refresh Token을 함께 보내야합니다.
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };
  if (!userInfo.userId) {
    return res.status(401).send('Not Authorized')
  }
  //async로 구현된 토큰 생성자 generateToken 실행
  //generateToken = checkedKeepLogin여부에 따른 (accesstoken만 또는 accesstoken + refreshtoken) 생성자
  const { accessToken, refreshToken } = await generateToken(userInfo, checkedKeepLogin);

  //로그인 유지를 체크했을 경우 refresh token 생성됨
  if (refreshToken) {
    res.cookie('refresh_jwt', refreshToken, {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      //! refreshToken의 expires는 클라이언트가 받은 쿠키가 언제까지 유지될 것인지 설정한다.
      expires: new Date(Date.now() + 24 * 3600 * 1000 * 7)  //7일 후 소멸되는 persistent cookie
    })
  }

  //로그인 유지 안함
  //access token 기본제공
  res.cookie('access_jwt', accessToken, {
    domain: 'localhost',
    path: '/',
    sameSite: 'none',
    httpOnly: true,
    secure: true,
    //expires 옵션이 없는 session cookie
  })

  return res.redirect('/userinfo')

  // if (!userInfo.Id) {
  //   return res.status(401).send('Not Authorized')
  // } else {
  //   const { accessToken, refreshToken } = generateToken(userInfo, checkedKeepLogin)
  //   const cookieOptions = {
  //     domain: 'localhost',
  //     path: '/',
  //     sameSite: 'none',
  //     httpOnly: true,
  //     secure: true,
  //   }
  //   res.cookie('access_jwt', accessToken, cookieOptions)

  //   if (checkedKeepLogin) {
  //     cookieOptions.maxAge = 1000 * 60 * 60 * 24 * 7
  //     res.cookie('access_jwt', accessToken, cookieOptions)
  //   }
  //   res.redirect('/userinfo')
  // }
  /*
   * TODO: 로그인 로직을 구현하세요.
   *
   * userInfo에는 요청의 바디를 이용해 db에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo를 출력해보세요.
   * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야합니다.
   * 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야합니다.
   *
   * 로그인 성공 시에는 쿠키에 JWT를 담아 전송해야합니다.
   * 로그인 상태가 유지되어야 한다면 Access Token과 Refresh Token 모두 보내야합니다.
   * Access Token은 Session 쿠키로 Refresh Token은 Persistent Cookie로 보내야합니다.
   * Access Token의 쿠키 아이디는 access_jwt, Refresh Token의 쿠키 아이디는 refresh_jwt로 작성하세요.
   *
   * 로그인 상태가 유지되길 원하지 않는다면 Access Token만 보내야합니다.
   *
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */
};