import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.scss'
import { Home, About, Contactme } from './../../pages'

export default function App() {
    return (
        <div>    
            <nav className="navigation">
                <Link className="navigation_item" to="/">home</Link>
                <Link className="navigation_item" to="/about">about</Link>
                <Link className="navigation_item" to="/contactme">contact</Link>
            </nav>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactme" element={<Contactme />} />
                </Routes>
            </div>
        </div>
    )
}
