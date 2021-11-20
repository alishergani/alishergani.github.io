import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.scss'
import { Home, About } from './../../pages'

export default function App() {
    return (
        <div>    
            <nav className="navigation">
                <Link className="navigation_item" to="/">home</Link>
                <Link className="navigation_item" to="/about">about</Link>
            </nav>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    )
}
