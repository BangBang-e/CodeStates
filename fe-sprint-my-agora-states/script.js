// TODO: 서버 연결
let serverDiscussions = [] // 서버에서 받은 데이터를 담을 변수를 준비한다.
fetch('http://localhost:4000/discussions')
    .then((res) => res.json())
    .then((json) => {
        serverDiscussions = json // 받아온 데이터를 담아준다.
        const ul = document.querySelector('ul.discussions__container')
        // ul 이라는 변수로 ul.discussions__container 를 담아온다.
        render(ul) // render 한다.
    })

// TODO: convertToDiscussion은 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
    const li = document.createElement("li"); // li 요소 생성
    li.className = "discussion__container"; // 클래스 이름 지정

    // TODO: 1. 아바타 정보 만들기
    const avatarWrapper = document.createElement("div"); // 프로필 사진이 들어가 있는 div 요소 생성
    avatarWrapper.className = "discussion__avatar--wrapper"; // 위의 div 요소에 class=discussion__avatar--wrapper 지정

    const avatarImg = document.createElement('img');
    avatarImg.className = "dicussion__avatar--image";
    avatarImg.alt = "avatar of " + obj.author;
    avatarImg.src = obj.avatarUrl;

    avatarWrapper.append(avatarImg);  // [ avatarWrapper ] 에 [ avatarImg ] 이 친구 넣을게

    // TODO: 2.content 내용 만들기
    const discussionContent = document.createElement("div"); // 재목,작성자,날짜 나오는 div 요소 생성
    discussionContent.className = "discussion__content"; // 위의 div 요소에 class=discussion__content 지정

    // TODO: 2-1. content 제목 만들기
    const discussionTitle = document.createElement('h2'); // discussion 제목 넣을게
    discussionTitle.className = "discussion__title"; // class=discussion__title 지정
    const discussionLink = document.createElement('a'); // 링크 넣을게
    discussionLink.href = obj.url;
    discussionLink.textContent = obj.title; // 여기 내용은 data 객체에서 key 를 title 로 갖는 친구임

    discussionTitle.append(discussionLink);

    const discussionAnswered = document.createElement("div"); // 응답여부가 체크된 div 요소 생성
    discussionAnswered.className = "discussion__answered"; // 위의 div 요소에 class=discussion__answered 지정

    // TODO: 2-2. content 작성자, 작성시간 만들기
    const discussionInfo = document.createElement('div'); // discussion 발행일자 넣을게
    discussionInfo.className = "discussion__information";
    discussionInfo.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleString()}`; // 여기 내용은 data 객체에서 key 를 createdAt 로 갖는 친구임

    discussionContent.append(discussionTitle, discussionInfo); // discussion 컨텐츠에 이거 두개 넣을게

    // TODO: 3.답변유무 체크박스 만들기
    const discAnswered = document.createElement('p');
    discAnswered.className = "discussion__answered";
    discAnswered.textContent = obj.answer ? '☑︎' : '☒';

    discussionAnswered.append(discAnswered)

    // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
    const ul = document.querySelector('ul.discussions__container');// ul 은 class=discussions__container 이 친구거든?
    ul.append(li);// [ ul ] 에 [ li ] 넣을게

    li.append(avatarWrapper, discussionContent, discussionAnswered);
    return li;// [ li ] 에 [ 아바타 사진 + discussion 내용 + 응답 여부 ] 이 친구들을 넣을게
};

// TODO: 제출시 사용되는 변수
const form = document.querySelector("form.form");
const inputName = document.querySelector(".form__input--name > input");
const inputTitle = document.querySelector(".form__input--title > input");
const inputQuestion = document.querySelector(".form__textbox > textarea");

// TODO: 제출 이벤트
form.addEventListener("submit", (event) => {
    event.preventDefault(); //새로고침으로 정보 초기화 방지
    const obj = {
        id: "999",
        createdAt: new Date(),
        title: inputTitle.value,
        url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
        author: inputName.value,
        answer: null,
        bodyHTML:
            inputQuestion.value,
        avatarUrl:
            "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
    }

    // TODO: 기존의 배열의 가장 앞에 넣어주기
    serverDiscussions.unshift(obj);
    ul.prepend(convertToDiscussion(obj))

    inputName.value = ''
    inputTitle.value = ''
    inputQuestion.value = ''
})

// TODO: agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다. -> server 랑 연결ㅎ함
const render = (ul) => {
    for (let i = 0; i < serverDiscussions.length; i += 1) {
        ul.append(convertToDiscussion(serverDiscussions[i]));
    }
    return;
};

// TODO: ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다. -> 이것두
const ul = document.querySelector("ul.discussions__container");
render(ul);


// //데이터 렌더링 함수
// const render = (element, from, to) => {
//     //시작 값과 끝값이 정해지지 않은 상태라면 정해주기
//     if (!from && !to) {
//         from = 0;
//         to = data.length;
//     }

//     //렌더해줄때마다 남아있는 정보가 있다면 모두 지우고
//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }

//     //처음부터 다시 데이터 붙이기
//     for (let i = from; i < to; i++) {
//         element.append(makeContent(data[i]));
//     }
//     //렌더링 완료 후 함수 종료시키기
//     return;
// }

// //페이지네이션 변수
// //한 화면에 보여질 질문 갯수
// let maxContent = 5;
// //첫페이지 설정
// let page = 1;

// //전체 목록 렌더링
// const ul = document.querySelector('ul.discussions__container');
// render(ul, 0, maxContent);

// //페이지 시작과 끝 계산하는 함수
// const getPage = (maxContent, page) => {
//     const len = data.length;
//     let start = (page - 1) * maxContent;
//     let end = start + maxContent;

//     if (page <= 0) {
//         start = 0;
//     }

//     if (end >= len) {
//         end = len;
//     }

//     return {start, end};
// }

// //페이지 버튼 클릭 이벤트
// const buttons = document.querySelector('.buttons');

// //이전 버튼 클릭시 발생 이벤트
// buttons.children[0].addEventListener('click', () => {
//     if (page > 1) {//현재 페이지가 2페이지면 1페이지로 이동
//         page -= 1;
//     }

//     const {start, end} = getPage(maxContent, page);
//     render(ul, start, end);
// })

// //다음 버튼 클릭시 발생 이벤트
// buttons.children[2].addEventListener('click', () => {
//     if (maxContent * page < data.length) {
//         //현재 위치한 페이지에 있는 데이터 순서가 현재 데이터의 끝 인덱스보다 작은 상황일때
//         //다음 버튼 누르면 다음페이지로 이동
//         page += 1;
//     }

//     const {start, end} = getPage(maxContent, page);
//     render(ul, start, end);
// })

// //정보 삭제 버튼 클릭시 이벤트
// buttons.children[1].addEventListener('click', () => {
//     //전체 삭제
//     localStorage.removeItem('serverDiscussions');
//     //data 에 다시 할당
//     data = serverDiscussions.slice();
//     //페이징 초기화 후 다시 첫번째 페이지 보여주기
//     maxContent = 5;
//     page = 1;
//     render(ul, 0, maxContent);
// })

// //제출시 사용되는 변수
// const form = document.querySelector('form.form');
// const author = document.querySelector('div.form__input--name > input');
// const title = document.querySelector('div.form__input--title > input');
// const textBox = document.querySelector('div.form__textbox > textarea');

// //제출 이벤트
// form.addEventListener('submit', (event) => {
//     //새로고침으로 정보 초기화 방지
//     event.preventDefault();

//     const obj = {
//         id: "D_kwDOHOApLM4APjJi",
//         createdAt: new Date(),
//         title: title.value,
//         url: "https://github.com/codestates-seb/agora-states-fe/discussions",
//         author: author.value,
//         answer: null,
//         bodyHTML: textBox.value,
//         avatarUrl:
//             "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
//     };

//     //앞에 추가
//     data.unshift(obj);

//     //로컬스토리지에 추가된 정보를 반영 후 저장
//     localStorage.setItem('serverDiscussions', JSON.stringify(data));

//     //렌더링
//     render(ul, 0, maxContent);
// })