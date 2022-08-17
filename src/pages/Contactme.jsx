import React from 'react'
import icon from './../static/send-icon.svg'

export default function Contactme({handleNotif}) {
    return (
        <>
            <div className="container">
                <div className="social half">
                    <p>MY SOCIALS:</p>
                    <ul className="social_list">
                        <li className="social_item">
                            <a href="https://t.me/ka4anbek" target="_blank" rel="noreferrer">
                                <img src="https://web.telegram.org/k/assets/img/safari-pinned-tab.svg?v=jw3mK7G9Ry" alt="telegram" />
                            </a>
                        </li>
                        <li className="social_item">
                            <a href="https://github.com/alishergani" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="github" />
                            </a>
                        </li>
                        <li className="social_item">
                            <a href="https://www.instagram.com/ka4anbek/" target="_blank" rel="noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/1419/1419647.png" alt="instagram" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}
