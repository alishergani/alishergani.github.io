import React from 'react'
import icon from './../static/send-icon.svg'

export default function Contactme({handleNotif}) {

    const sendme = (e) => {
        e.preventDefault()
        const data = {
            sender: e.target[0].value,
            message: e.target[1].value
        }

        fetch('https://sendmemail-ka4an.herokuapp.com/sendmemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            handleNotif({
                id: new Date().getTime(),
                type: 'success',
                value: `Mail sent!`
            })
        }).catch(e => {
            handleNotif({
                id: new Date().getTime(),
                type: 'error',
                value: `Error on sending mail`
            })
        })

        fetch('https://sendmemail-ka4an.herokuapp.com/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            handleNotif({
                id: new Date().getTime(),
                type: 'success',
                value: `Message sent to my telegram!`
            })
        }).catch(e => {
            handleNotif({
                id: new Date().getTime(),
                type: 'error',
                value: `Error on sending telegram message`
            })
        })

        console.log('e', e);
    }
    return (
        <>
            <h1>CONTACT ME</h1>
            <div className="container">
                <form className="form half" onSubmit={sendme}>
                    <div className="field">
                        <label htmlFor="sender">your name?</label>
                        <textarea name="sender" id="sender" cols="30" rows="5"></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="message">your message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className="btn">SEND <img src={icon} alt="" /></button>
                </form>
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
