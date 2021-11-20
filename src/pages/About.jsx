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
                <h3 className="title">Hi, my name is <span className="blue">Alisher</span></h3>
                <p className="aticle">
                    I'm <span className="red">frontend developer</span> from Kazakhstan
                </p>
                <p className="aticle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt nihil accusantium nulla, labore harum excepturi quas corrupti nobis. Qui magni doloribus consequuntur praesentium maiores aspernatur ipsum. Eum, ipsum assumenda possimus fugit pariatur sit accusamus corrupti iusto non quos consectetur reiciendis quasi asperiores adipisci, molestiae voluptas. Nisi suscipit error enim velit eum fugiat iste, voluptatibus fuga odio, repudiandae earum distinctio consequuntur rem maiores at dolores eius nesciunt tempora facere laboriosam placeat labore iure tempore! Vel non error est quibusdam eveniet asperiores doloremque ducimus? Dignissimos tenetur vitae in totam alias animi deleniti, placeat illum cupiditate reprehenderit impedit explicabo asperiores deserunt voluptas voluptates illo voluptate ut doloremque. Modi doloribus laboriosam quas laudantium at mollitia eius autem debitis deleniti atque itaque dolore illum vero amet tempore, rerum fuga placeat, eligendi facilis. Tempore maiores quaerat consequatur quas! At voluptatibus recusandae minima eum corporis. Qui magnam reprehenderit quos, quidem optio nostrum nemo? Tempore, eum facilis.
                </p>
            </div>
        </>
    )
}
