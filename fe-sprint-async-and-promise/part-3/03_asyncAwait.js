async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let newsData = await fetch(newsURL)
    .then((newsRes) => {
      return newsRes.json()
    })
  let weatherData = await fetch(weatherURL)
    .then((weathersRes) => {
      return weathersRes.json()
    })

  return {
    news: newsData.data,
    weather: weatherData
  }
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
