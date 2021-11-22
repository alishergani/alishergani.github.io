import React, { useState, useEffect } from 'react'
import './Notification.scss'

export default function Notification(props) {
    const { newNotif } = props
    const [list, setList] = useState([])
    const [notification, setNotification] = useState()

    useEffect(() => {
        if(!newNotif.id) return
        setList(oldArray => [...oldArray, newNotif])
    }, [newNotif])
    
    useEffect(() => { 
        if(!list.length) return
        console.log('list', list, list.length);
        setNotification({...list[0]})
        setTimeout(() => {
            let arr = [...list]
            arr.shift()
            setList(arr)
            setNotification()
        }, 2000)
    }, [list])

    return (
        <>
            {notification && <div className="Notification">
                <div className="Notification_list">
                    <div className={`Notification_item ${notification.type}`}>{notification.value}</div>
                </div>
            </div>}
        </>
    )
}
