import React from 'react';
import '../App.css';
import { Discussion } from './Discussion';

export const Discussions = ({discussion}) => {
    return (
        <>
            <section className="discussion__wrapper">
                <ul className="discussions__container">
                    {discussion.map(discussion => {
                        return <Discussion discussion={discussion} key={discussion.id} />
                    })}
                </ul>
            </section>
        </>
    );
}
