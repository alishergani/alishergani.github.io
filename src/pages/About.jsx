import React from 'react'
import pic1 from './../static/pic1.JPG'
import pic3 from './../static/pic3.JPG'
import pic5 from './../static/pic5.jpg'

export default function About() {
    return (
        <>
            <h1>ABOUT ME</h1>
            <div className="images">
                <div className="pic big" style={{backgroundImage: `url(${pic3})`}}></div>
                <div className="wrp">
                    <div className="pic small" style={{backgroundImage: `url(${pic1})`}}></div>
                    <div className="pic small" style={{backgroundImage: `url(${pic5})`}}></div>
                </div>
            </div>

            <div className="content">
                <h3 className="title">Hi, my name is <span className="blue">Alisher</span>. Nice to meet you</h3>
                <p className="aticle">
                    I'm <span className="red">frontend developer</span> from <a href="https://www.google.com/maps/place/Almaty">Kazakhstan, Almaty</a>
                </p>
                <p className="aticle"></p>
            </div>
        </>
    )
}
