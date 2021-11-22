import React from 'react'

function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-7-22`) - +new Date();
    let timeLeft = {};
    
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
}

export default function Wedding() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => {
            clearTimeout(id);
        };
    });
    
    return (
        <>
            <div className="wedding">
                <h1 className="wedding__heading">wedding day</h1>
                <div className="timer">
                    {Object.keys(timeLeft).map((interval, idx) => (
                        <div className="timer_block" key={idx}>
                            <h1>{timeLeft[interval]}</h1>
                            <span className="title">{interval}</span>
                        </div>
                    ))}
                </div>
                <h1 className="wedding__heading">coming soon ...</h1>
            </div>
        </>
    )
}
