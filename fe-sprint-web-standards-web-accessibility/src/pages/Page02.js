import styled from "styled-components"

const fontSizeDiv = styled.div`
    font-size: ${props => props.size || '1rem'};
    font-weight: 700;
`
const Page02 = () => {
    return (
        <article>
            <h1>문제 2 : 자주 틀리는 마크업</h1>
            <p>자주 틀리는 HTML 요소의 사용법들을 고쳐봅시다. 웹 표준을 저해하는 사용법이지만, 화면 상으로는 큰 문제가 없기 때문에 의외로 자주 발견할 수 있는 예시들 이기도 합니다.<br />
                우측 문제 가이드와 유어클래스 콘텐츠를 참고하여 웹 표준에 맞는 마크업으로 바꾸세요.</p>
            <li>아래 자주 틀리는 마크업 예시들을 웹 표준에 맞게 수정하세요.</li>
            <li>예시 외에도 애플리케이션 내에 틀리게 사용한 마크업이 있습니다. 찾아서 수정해보세요.</li>
            <section>
                <h2>틀린 마크업 예시</h2>
                <section>
                    <h3>예시 1</h3>
                    <ul>
                        <li>
                            <div><a>어떻게 틀렸을까요?</a></div>
                        </li>
                        <li>
                            <p><em>모두 같은 종류의 실수를 하고 있습니다.</em></p>
                        </li>
                        <li>
                            <h4><strong>틀린 이유를 찾아서 수정해보세요.</strong></h4>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>예시 2</h3>
                    <ul>
                        <li>
                            <strong>화면만 보면 틀렸다는 사실을 인지하기 어렵습니다.</strong>
                        </li>
                        <li>
                            <em>
                                Element탭이나 Visual Studio Code에서 소스 코드를 확인하세요.
                            </em>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>예시 3</h3>
                    <ul>
                        <li>
                            <div className="title2">글씨 크기를 조절하고 싶을 땐</div>
                        </li>
                        <li>
                            <div className="title3">요소 종류를 사용하는 것이 아니라</div>
                        </li>
                        <li>
                            <div className="title2">CSS를 이용해주세요.</div>
                        </li>
                        <li>
                            <div className="title3">요소의 의미와 맞지 않습니다.</div>
                        </li>
                    </ul>
                    {/* styled-components 적용 */}
                    <ul>
                        <li>
                            <fontSizeDiv size="1.5rem">글씨 크기를 조절하고 싶을 땐</fontSizeDiv>
                        </li>
                        <li>
                            <fontSizeDiv size="1.2rem">요소 종류를 사용하는 것이 아니라</fontSizeDiv>
                        </li>
                        <li>
                            <fontSizeDiv size="1.5rem">CSS를 이용해주세요.</fontSizeDiv>
                        </li>
                        <li>
                            <fontSizeDiv size="1.2rem">요소의 의미와 맞지 않습니다.</fontSizeDiv>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>예시 4</h3>
                    <ul>
                        <li className="distance1">요소 사이에 간격을 주고 싶을 때에도</li>
                        <li className="distance2">CSS를 이용해주세요.</li>
                        <li className="distance3">태그의 존재 의의와 맞지 않습니다.</li>
                        <li className="distance4">요소 사이의 간격을 조절할 때가 아니라 줄 바꿈을 할 때 사용해주세요.<br />
                            이렇게 사용해주시면 됩니다.</li>
                    </ul>
                </section>
                <section>
                    <h3>예시 5</h3>
                    <ul>
                        <li className="color">스타일 속성을 적용하고 싶을 때에는</li>
                        <li className="size">태그 안에 style 속성을 작성하는 방법인</li>
                        <li className="weight">인라인 스타일링을 사용하지 마세요.</li>
                        <li className="shadow">CSS 코드를 따로 작성하는 것이 웹 표준에 맞는 사용법입니다.</li>
                    </ul>
                </section>
                <section>
                    <h3>종합 예시</h3>
                    <ul>
                        <li className="list-style, distance2"><strong><a>위 예시를 종합적으로 섞어놓았습니다.</a></strong></li>

                        <div className="background-color, distance1"><strong>이 정도 되면 보기만해도 불편하실 것 같습니다.</strong></div>

                        <h1 className="h1-color"><em>틀린 곳을 찾아서 수정해보세요.</em></h1>
                    </ul>
                </section>
            </section>
        </article>)
}

export default Page02