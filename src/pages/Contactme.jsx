import React from 'react'
import icon from './../static/send-icon.svg'

export default function Contactme() {
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
            console.log(data);
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
            console.log(data);
        })
    }
    return (
        <>
            <h1>CONTACT ME</h1>
            <form className="form" onSubmit={sendme}>
                <div className="field">
                    <label htmlFor="sender">WHO ARE U?</label>
                    <textarea name="sender" id="sender" cols="30" rows="5"></textarea>
                </div>
                <div className="field">
                    <label htmlFor="message">your message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button className="btn">SEND <img src={icon} /></button>
            </form>
        </>
    )
}
