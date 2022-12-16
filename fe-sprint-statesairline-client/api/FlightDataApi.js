// import flightList from '../resource/flightList';
import fetch from 'node-fetch';

// if (typeof window !== 'undefined') {
//   localStorage.setItem('flight', JSON.stringify(flightList));
// }

export function getFlight(filterBy = {}) {
  // filterBy = {} <- default value
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  
  const url = `http://localhost:3001/flight`
    
    let queryString = '';
    if(filterBy.departure) queryString += `?departure=${filterBy.departure}&`
    if(filterBy.destination) queryString += `destination=${filterBy.destination}`
    return fetch(`${url}${queryString}`).then(data => data.json());
}
