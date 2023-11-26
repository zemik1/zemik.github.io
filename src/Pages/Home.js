import Header from "../Components/Header/Header";
import React from 'react';

function Home() {
    return (
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, HTML, CSS</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, PHP, Laravel</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Home