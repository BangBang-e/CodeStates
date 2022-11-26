function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  // * Promise 형태로 리턴되어야 합니다.
  // * Promise.all을 사용해서 풀어야 합니다.
  // * /data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다.
  return Promise.all([
    fetch(newsURL),
    fetch(weatherURL)
  ])
  .then(([newsResponse, weatherResponse]) => {
    return Promise.all([newsResponse.json(), weatherResponse.json()])
  })
  .then(([news, weather]) => {
    return {
      news: news.data,
      weather: weather
    }
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
