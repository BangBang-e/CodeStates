const { USER_DATA } = require('../../db/data');
// JWT는 verifyToken으로 검증할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  //쿠키를 받는 곳
  const accessToken = req.cookies['access_jwt'];
  const refreshToken = req.cookies['refresh_jwt'];

  //토큰을 만들때 사용한 secret을 가지고 온건지 검증한다.
  const accessPayload = await verifyToken('access', accessToken);

  //case access token이 검증됐을 경우
  if (accessPayload) {
    const userInfo = { ...USER_DATA.filter((user) => user.id === accessPayload.id)[0] };
    //복호화된 값을 DB와 비교
    if (!userInfo) {
      return res.status(401).send('Not Authorized')
    }
    //password는 delete등으로 삭제하여 보낸다
    return res.json({ ...userInfo, password: undefined })
  }

  //case access token이 만료되어 refresh token을 검증하는 경우
  else if (refreshToken) {
    const refreshPayload = await verifyToken('refresh', refreshToken);
    //refresh token 복호화 결과를 담은 refreshPayload
    if (!refreshPayload) {
      return res.status(401).send('Not Authorized')
    }
    //검증된 경우 userinfo로 accesstoken을 다시 발급
    //refresh token 유효시간이 이내일 경우 이와 같이 로그인 유지가 가능하다
    const userInfo = USER_DATA.filter((user) => user.id === refreshPayload.id)[0]
    const { accessToken } = await generateToken(userInfo);

    res.cookie('access_jwt', accessToken, {
      domain: 'localhost',
      path: '/',
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      // Expires 옵션이 없는 Session Cookie
    });
    //password는 delete등으로 삭제하여 보낸다
    return res.json({ ...userInfo, password: undefined });
  }
  return res.status(401).send('Not Authorized');
  /*
   * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * Access Token에 대한 검증이 성공하면 복호화된 payload를 이용하여 USER_DATA에서 해당하는 유저를 조회할 수 있습니다.
   * Access Token이 만료되었다면 Refresh Token을 검증해 Access Token을 재발급하여야 합니다.
   * Access Token과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
   */
};
