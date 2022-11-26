const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // * 체이닝의 결과가 Promise 형태로 리턴되어야 합니다.
  // * /data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다.
  // * fetch를 활용하세요. 총 두 번 사용해야 합니다.
  // * Promise.all 또는 async/await을 사용하지 않고 풀어보세요.
  
  return fetch(newsURL)
    .then((response) => response.json()) // news.json
    .then((newsData) => {
      let news = newsData.data
      return fetch(weatherURL)
        .then((response) => response.json()) //weather.json
        .then((weatherData) => {
          return {
            news: news,
            weather: weatherData
          }
        })
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}