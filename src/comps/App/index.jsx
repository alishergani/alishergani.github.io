import React, {useEffect, useState} from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import './App.scss'
import { Home, About, Contactme } from './../../pages'
import Notification from './../Notification'

export default function App() {
    const location = useLocation()
    const [curr, setCurr] = useState('')
    const [newNotif, setNewNotif] = useState({})
    const routes = [{
            to: '/',
            name: 'home'
        },{
            to: '/about',
            name: 'about'
        },{
            to: '/contactme',
            name: 'contact'
        }
    ]

    const addNotif = (notif) => {
        console.log('setNewNotif', notif);
        setNewNotif(notif)
    }


    useEffect(() => {
        setCurr(location.pathname)
    }, [location])

    return (
        <div className="app">
            <Notification newNotif={newNotif} />
            {curr !== '/wedding' && <nav className="navigation">
                {routes.map((route, idx) => (
                    <Link key={idx} className={`navigation_item ${curr === route.to ? 'active':''}`} to={route.to}>{route.name}</Link>
                ))}
            </nav>}
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactme" element={<Contactme handleNotif={addNotif} />} />
                </Routes>
            </div>
        </div>
    )
}
