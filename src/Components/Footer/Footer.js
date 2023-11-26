import vk from "../../img/icons/vk.svg";
import inst from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import React from 'react';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/brokerhush"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/zemik_chill/"><img src={inst}
                                                                       alt="Link"/></a>
                        </li>

                        <li className="social__item"><a href="https://github.com/zemik1"><img src={gitHub} alt="Link"/></a>
                        </li>

                    </ul>
                    <div className="copyright">
                        <p>© Земницкий Данил</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer