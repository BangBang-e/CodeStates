import React from 'react';
import '../App.css';
import { Fragment, useState } from 'react'


export const Form = ({ discussion, addData }) => {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");

    const handleButtonClick = (event) => {
        event.preventDefault()

        const newDiscussion = {
            id: discussion[0].id + 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            title: title,
            url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
            author: username,
            answer: null,
            bodyHTML: question,
            avatarUrl:
                "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
        }
        // setNewData(newDiscussions)
        // discussions.unshift(newData)
        addData([newDiscussion, ...discussion])
    }

    const handleChangeName = (event) => {
        setUsername(event.target.value)
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeQuestion = (event) => {
        setQuestion(event.target.value)
        addData([...discussion])
    }

    return (
        <>
            <section className="form__container">
                <form action="" method="get" className="form" onSubmit={handleButtonClick}>
                    <div className="form__input--wrapper">
                        <div className="form__input--name">
                            <label htmlFor="name">이 름 : </label>
                            <input type="text" name="name" id="name" onChange={handleChangeName} required />
                        </div>
                        <div className="form__input--title">
                            <label htmlFor="name">제 목 : </label>
                            <input type="text" name="name" id="name" onChange={handleChangeTitle} required />
                        </div>
                        <div className="form__textbox">
                            <label htmlFor="story">질 문 : </label>
                            <textarea id="story" name="story" placeholder="Fill out the questions." onChange={handleChangeQuestion} required></textarea>
                        </div>
                    </div>
                    <div className="form__submit">
                        <input className="press__submit"
                                type="submit"
                                value="submit" />
                    </div>
                </form>
            </section>
        </>
    );
}
